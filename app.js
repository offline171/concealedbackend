const express = require('express');
const sequelize = require('./config/database');
const Customer = require('./models/Customer');
const Bookmark = require('./models/Bookmark');
const Location = require('./models/Location');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes

/////////////////////////////////////////////////////////
//                      CUSTOMERS                      // + sync that starts the server
/////////////////////////////////////////////////////////

// Get all customers
app.get('/customers', async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a customer
app.post('/customers', async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get customer by ID
app.get('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update customer
app.put('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      await customer.update(req.body);
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete customer
app.delete('/customers/:id', async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (customer) {
      await customer.destroy();
      res.json({ message: 'Customer deleted' });
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server and sync database
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });

  /////////////////////////////////////////////////////////
  //                      BOOKMARKS                      //
  /////////////////////////////////////////////////////////
  
  // Get all bookmarks
  app.get('/bookmarks', async (req, res) => {
    try {
      const bookmarks = await Bookmark.findAll();
      res.json(bookmarks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Create a bookmark
  app.post('/bookmarks', async (req, res) => {
    try {
      const bookmark = await Bookmark.create(req.body);
      res.status(201).json(bookmark);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Get bookmark by ID
  app.get('/bookmarks/:id', async (req, res) => {
    try {
      const bookmark = await Bookmark.findByPk(req.params.id);
      if (bookmark) {
        res.json(bookmark);
      } else {
        res.status(404).json({ message: 'Bookmark not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update bookmark
  app.put('/bookmarks/:id', async (req, res) => {
    try {
      const bookmark = await Bookmark.findByPk(req.params.id);
      if (bookmark) {
        await bookmark.update(req.body);
        res.json(bookmark);
      } else {
        res.status(404).json({ message: 'Bookmark not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete bookmark
  app.delete('/bookmarks/:id', async (req, res) => {
    try {
      const bookmark = await Bookmark.findByPk(req.params.id);
      if (bookmark) {
        await bookmark.destroy();
        res.json({ message: 'Bookmark deleted' });
      } else {
        res.status(404).json({ message: 'Bookmark not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  /////////////////////////////////////////////////////////
  //                      LOCATIONS                      //
  /////////////////////////////////////////////////////////
  
  // Get all locations
  app.get('/locations', async (req, res) => {
    try {
      const locations = await Location.findAll();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Create a location
  app.post('/locations', async (req, res) => {
    try {
      const location = await Location.create(req.body);
      res.status(201).json(location);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Get location by ID
  app.get('/locations/:id', async (req, res) => {
    try {
      const location = await Location.findByPk(req.params.id);
      if (location) {
        res.json(location);
      } else {
        res.status(404).json({ message: 'Location not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  
  // Update location
  app.put('/locations/:id', async (req, res) => {
    try {
      const location = await Location.findByPk(req.params.id);
      if (location) {
        await location.update(req.body);
        res.json(location);
      } else {
        res.status(404).json({ message: 'Location not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  // Delete location
  app.delete('/locations/:id', async (req, res) => {
    try {
      const location = await Location.findByPk(req.params.id);
      if (location) {
        await location.destroy();
        res.json({ message: 'Location deleted' });
      } else {
        res.status(404).json({ message: 'Location not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });