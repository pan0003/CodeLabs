// Exercise 1 
// Here is where the class Subject is defined. Methods are addObserver, removeObserver, and notifyObservers
class Subject {
	constructor() {
		this.observers = [];
	}
	// Add methods here
    addObserver(observer)
    {
        this.observers.push(observer);
    }

    removeObserver(observer)
    {
        const index = this.observers.indexOf(observer);
        if (index !== -1) 
        {
          this.observers.splice(index, 1);
        }
    }

    notifyObservers()
    {
        for (const observer of this.observers) 
        {
            if (typeof observer.update === 'function') 
            {
              observer.update();
            }
          }
    }
}
// In my Observer class, an update method is defined as well
class Observer {
	update() {
		console.log('Observer updated!');
	}
}

// Here is how I instantiate the Subject
  const subject = new Subject();

// Here is where I create and add multiple observers
  const observer1 = new Observer('Observer 1');
  const observer2 = new Observer('Observer 2');
  const observer3 = new Observer('Observer 3');
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  subject.addObserver(observer3);

  // Now, I will call notifyObservers and ensure that each observer gets updated
  subject.notifyObservers();

 // -- EXERCISE 2 -- //
 // I. Destructure the person object to extract the name and age properties into variables.
// II. Use array destructuring to get the second and fourth items from the fruits array.
// III. Extract the city and country properties from the address object nested within the person object using nested destructuring.
  const person = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  };
  
  const fruits = ['apple', 'banana', 'cherry', 'date'];
  
  // Here is where I destructure the person object to extract the name and age properties into variables.
  const { name, age } = person;
  
  // Here, I will use array destructuring to get the second and fourth items from the fruits array.
  const [secondFruit, , , fourthFruit] = fruits;
  
  // Now, I will extract the city and country properties from the address object nested within the person object using nested destructuring.
  const { address: { city, country } } = person;
  
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Second Fruit: ${secondFruit}`);
  console.log(`Fourth Fruit: ${fourthFruit}`);
  console.log(`City: ${city}`);
  console.log(`Country: ${country}`);

 // -- EXERCISE 3 -- //
// I.Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
// II.Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
// III. Invoke the fetchPosts function and log the results.
   async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log('Fetched posts:', data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Here is where I call the function to fetch posts
  fetchPosts();

  // Thought process: We define the fetchPosts async function. Inside the function, I use the fetch API to make a GET request to the specified URL. I check if the response status is OK and throw an error if it's not. If the response is successful, I parse the JSON data and log the fetched posts to the console. If an error occurs during the try block, I catch it and log an appropriate error message using the catch block. Finally, I call the fetchPosts function to fetch the posts and handle errors as needed.
  
// -- EXERCISE 4 -- //
// I. Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
// II. The data passed to each observer's update method should be the list of posts fetched.
// III. Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
// IV. Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
// V. Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.
class Subject2 {
	constructor() {
		this.observers = [];
	}

	addObserver(observer) {
		this.observers.push(observer);
	}

	removeObserver(observer) {
		const index = this.observers.indexOf(observer);
		if (index !== -1) {
			this.observers.splice(index, 1);
		}
	}

	notifyObservers(data) {
		for (const observer of this.observers) {
			observer.update(data);
		}
	}

	async fetchAndNotify() {
		const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Failed to fetch data. Status: ${response.status}`);
			}

			const data = await response.json();
			this.notifyObservers(data);
		} catch (error) {
			this.notifyObservers(`Error: ${error.message}`);
		}
	}
}

class Observer {
	update(data) {
		if (typeof data === 'string') {
			// If it's an error message, log it.
			console.log(data);
		} else if (Array.isArray(data) && data.length > 0) {
			// If it's the list of posts, destructure and log the title of the first post.
			const [firstPost] = data;
			console.log(`First Post Title: ${firstPost.title}`);
		}
	}
}

// Here is where I instantiate the Subject
const subject2 = new Subject();

// Here  is where I create and add multiple observers
const observer9 = new Observer();
const observer8 = new Observer();

subject.addObserver(observer9);
subject.addObserver(observer8);

// Here is where I call fetchAndNotify and ensure each observer logs the title of the first post or an error message.
subject.fetchAndNotify();

// Thought process
// I create the fetchAndNotify method in the Subject class, which fetches data from the JSONPlaceholder API and then notifies observers with either the fetched data (list of posts) or an error message. Next, I update the Observer class to handle received data, logging the title of the first post if it's an array of posts or logging the error message if it's a string. Then, I instantiate the Subject, add multiple observers, and call the fetchAndNotify method to demonstrate that each observer logs the title of the first post or an error message as appropriate.
  
