function onSubmitContact(e){
  e.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const status = document.getElementById('form-status');
  
  if(!firstName || !lastName || !email || !message){ 
    status.textContent = 'Please fill all fields.'; 
    status.className = 'error';
    return false; 
  }
  
  // Create mailto link with pre-filled content
  const subject = `Portfolio Contact from ${firstName} ${lastName}`;
  const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`;
  
  const mailtoLink = `mailto:eelmi2@cs.washington.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Try to open email client
  try {
    window.location.href = mailtoLink;
    status.textContent = 'Email client opened! Please send the message to eelmi2@cs.washington.edu';
    status.className = 'success';
    e.target.reset();
  } catch (error) {
    // Fallback: show email details
    status.innerHTML = `
      <strong>Email Details:</strong><br>
      To: eelmi2@cs.washington.edu<br>
      Subject: ${subject}<br>
      Message: ${message}<br><br>
      Please copy these details and send an email manually.
    `;
    status.className = 'success';
    e.target.reset();
  }
  
  return false;
}