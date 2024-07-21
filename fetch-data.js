async function fetchUserData(){
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.getElementById('api-data');

dataContainer.innerHTML = 'Loading user data...';

try {
    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const users = await response.json();

    // Clear existing content
    dataContainer.innerHTML = '';

    // Display fetched data
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.innerHTML = `<p>Username: ${user.username}</p>
                             <p>Email: ${user.email}</p>`;
        dataContainer.appendChild(userDiv);
    });

    users.forEach(user => {
        const  userList = document.createElement('ul');
        // Create a <li> element
        const listItem = document.createElement('li');
        
        // Set the text content of the <li> to the user’s name
        listItem.textContent = user.name;
        
        // Append the <li> to userList
        userList.appendChild(listItem);
      });
      const dataContainer = document.getElementById('dataContainer');

// Append userList to dataContainer
dataContainer.appendChild(userList);


}
catch (error) {
    // Handle any errors that occur during the process
    console.error('Error loading user data:', error);

    // Clear existing content of dataContainer
    dataContainer.innerHTML = '';

    // Set its text content to 'Failed to load user data.'
    dataContainer.textContent = 'Failed to load user data.';
  }
  document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
  });


}