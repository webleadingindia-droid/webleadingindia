<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Quote Request Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f7f8;
      color: #333;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #fff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    h2 {
      text-align: center;
      color: #4CAF50;
    }
    label {
      display: block;
      margin-top: 15px;
      font-weight: bold;
    }
    input, select, textarea {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 1px solid #ccc;
      border-radius: 6px;
    }
    .checkbox-group label {
      display: inline-block;
      font-weight: normal;
      margin-right: 10px;
    }
    button {
      background-color: #4CAF50;
      color: white;
      padding: 12px 20px;
      border: none;
      margin-top: 20px;
      border-radius: 6px;
      cursor: pointer;
      width: 100%;
    }
    button:hover {
      background-color: #45a049;
    }
    .message {
      text-align: center;
      margin-top: 20px;
      font-weight: bold;
    }
  </style>
</head>
<body>

  <div class="container">
    <h2>Request a Quote</h2>
    <form id="quoteForm" action="mail.php" method="post">
      <label for="name">Name*</label>
      <input type="text" id="name" name="name" required />

      <label for="email">Email*</label>
      <input type="email" id="email" name="email" required />

      <label for="phone">Phone*</label>
      <input type="text" id="phone" name="phone" required />

      <label for="projectType">Project Type*</label>
      <select id="projectType" name="projectType" required>
        <option value="">Select...</option>
        <option value="Website">Website</option>
        <option value="Web App">Web App</option>
        <option value="Mobile App">Mobile App</option>
        <option value="SEO">SEO</option>
      </select>

      <label>Services Needed*</label>
      <div class="checkbox-group">
        <label><input type="checkbox" name="services[]" value="Web Development" /> Web Development</label>
        <label><input type="checkbox" name="services[]" value="Web Design" /> Web Design</label>
        <label><input type="checkbox" name="services[]" value="E-commerce" /> E-commerce</label>
        <label><input type="checkbox" name="services[]" value="Web App" /> Web App</label>
        <label><input type="checkbox" name="services[]" value="SEO" /> SEO</label>
        <label><input type="checkbox" name="services[]" value="Maintenance" /> Maintenance</label>
      </div>

      <label for="budget">Budget Range*</label>
      <select id="budget" name="budget" required>
        <option value="">Select...</option>
        <option value="under-50k">Under ₹50,000</option>
        <option value="50k-100k">₹50,000 - ₹1,00,000</option>
        <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
      </select>

      <label for="description">Project Description*</label>
      <textarea id="description" name="description" rows="5" required></textarea>

      <button type="submit">Submit Request</button>
    </form>
  </div>
</body>
</html>
