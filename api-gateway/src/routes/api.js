const express = require('express');
const router = express.Router();
const axios = require('axios');
const authMiddleware = require('../middleware/authMiddleware')

//TODO Base URLs for microservices
const AUTH_SERVICE_URL = 'http://localhost:5001';
const BRAND_SERVICE_URL = 'http://localhost:5002';

//TODO Authentication routes
router.post('/auth/register', async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/auth/register`, req.body);
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

router.post('/auth/login', async (req, res) => {
  try {
    const response = await axios.post(`${AUTH_SERVICE_URL}/auth/login`, req.body);
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

//TODO start brands section 
router.get('/brands', authMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${BRAND_SERVICE_URL}/brands`);
    res.send(response.data);
  } catch (error) {
    console.error('Error calling auth service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

router.post('/brands', authMiddleware, async (req, res) => {
  try {
    const response = await axios.post(`${BRAND_SERVICE_URL}/brands`, req.body);
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

router.get('/brands/:id', authMiddleware, async (req, res) => {
  try {
    const response = await axios.get(`${BRAND_SERVICE_URL}/brands/${req.params.id}`);
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

router.put('/brands/:id', authMiddleware, async (req, res) => {
  try {
    const response = await axios.put(`${BRAND_SERVICE_URL}/brands/${req.params.id}`, req.body);  // PUT with ID and body
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});

router.delete('/brands/:id', authMiddleware, async (req, res) => {
  try {
    const response = await axios.delete(`${BRAND_SERVICE_URL}/brands/${req.params.id}`);  // DELETE with ID
    res.send(response.data);
  } catch (error) {
    console.error('Error calling brand service:', error.message);
    res.status(error.response?.status || 500).send(error.response?.data || { error: 'Internal Server Error' });
  }
});
//TODO end brands section 


//TODO Fixed export to use 'module.exports'
module.exports = router