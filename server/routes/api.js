const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

// models
const User = require('../models/users');
const Image = require('../models/images');

router.post('/login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  let promise = User.findOne({username}).exec();

  promise.then((doc) => {
    if (doc) {
      if (doc.isValid(password)) {
        // generate token
        let token = jwt.sign({username}, 'secret', {expiresIn : '3d'});
        console.log('succesful login')
        return res.status(200).json(token);
      } else {
        console.log('invalid pw')
        return res.status(501).json({message: 'Invalid password.'})
      }
    } else {
      console.log('wrong username')
      return res.status(501).json({message: 'Wrong username.'})
    }
  });

  promise.catch((err) => {
    res.status(501).json({message: 'Some internal error'});
  });
});

router.post('/register', (req, res, next) => {
  let user = new User({
    username: req.body.username,
    password: User.hashPassword(req.body.password)
  });

  let promise = user.save();

  promise.then((doc) => {
    return res.status(201).json(doc);
  })

  promise.catch((err) => {
    return res.status(501).json({message: 'Error registering user.'});
  });
});

var decodedToken = '';

router.get('/username', verifyToken, (req, res, next) => {
  return res.status(200).json(decodedToken.username);
});

router.get('/authenticated', verifyToken, (req, res, next) => {
  return res.status(200).json(decodedToken);
});

function verifyToken(req, res, next) {
  let token = req.query.token;
  jwt.verify(token, 'secret', (err, tokendata) => {
    if (err) {
      return res.status(400).json({message: 'Unauthorized request'});
    }
    if (tokendata) {
      decodedToken = tokendata;
      next();
    }
  })
}

router.get('/images', (req, res, next) => {
  let promise = Image.find().sort({so: 1});

  promise.then(docs => {
    return res.status(200).json(docs);
  });

  promise.catch(err => {
    return res.status(501).json({message: 'Error getting images'});
  })
});

router.delete('/delete-image/:id', verifyToken, (req, res) => {
  // TODO: delete image from S3
  let promise = Image.deleteOne({_id: req.params.id});

  promise.then(doc => {
    if (doc) {
      return res.status(200).json({message: 'Image deleted succesfully.'});
    } else {
      // TODO
    }
  })
});

module.exports = router;
