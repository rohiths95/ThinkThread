
import { BlogPost } from "@/types/blog";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React Hooks",
    author: "Jane Smith",
    date: "2025-04-15",
    excerpt: "Learn how to use React Hooks to simplify your functional components.",
    content: `
# Getting Started with React Hooks

React Hooks are a powerful feature that allows you to use state and other React features without writing a class. They're completely opt-in and 100% backwards-compatible.

## useState Hook

The useState hook lets you add React state to functional components:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## useEffect Hook

The useEffect hook lets you perform side effects in functional components:

\`\`\`jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

You can even create your own Hooks to reuse stateful behavior between different components:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return width;
}
\`\`\`

Hooks are a game-changer for React development, making code more readable and easier to understand.
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Hooks", "JavaScript"],
    readTime: 5
  },
  {
    id: "2",
    title: "Building Responsive Layouts with Tailwind CSS",
    author: "Mark Johnson",
    date: "2025-04-10",
    excerpt: "Discover how to create beautiful responsive designs quickly with Tailwind CSS.",
    content: `
# Building Responsive Layouts with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs.

## Getting Started

First, install Tailwind CSS via npm:

\`\`\`bash
npm install tailwindcss
\`\`\`

Then create your configuration file:

\`\`\`bash
npx tailwindcss init
\`\`\`

## Responsive Design

Tailwind makes responsive design a breeze with its responsive modifiers:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- This div will be full width on small screens, 
       half width on medium screens, 
       and one third width on large screens -->
</div>
\`\`\`

## Custom Components

When you find yourself repeating patterns, consider extracting components:

\`\`\`jsx
// Button.js
export function Button({ children, ...props }) {
  return (
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" 
      {...props}
    >
      {children}
    </button>
  );
}
\`\`\`

This allows for consistent styling across your application while keeping your markup clean.

## Dark Mode

Implementing dark mode is simple with Tailwind's dark mode variant:

\`\`\`html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  <!-- Content that adapts to light/dark mode -->
</div>
\`\`\`

Tailwind CSS makes responsive design more intuitive by providing utilities that map directly to CSS properties, allowing you to build modern websites quickly without leaving your HTML.
    `,
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["CSS", "Tailwind", "Responsive Design"],
    readTime: 4
  },
  {
    id: "3",
    title: "State Management with React Context API",
    author: "Sarah Williams",
    date: "2025-04-05",
    excerpt: "Learn how to effectively manage global state using React's built-in Context API.",
    content: `
# State Management with React Context API

React's Context API provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

## Creating a Context

First, create a context with a default value:

\`\`\`jsx
// ThemeContext.js
import { createContext } from 'react';

const ThemeContext = createContext('light');

export default ThemeContext;
\`\`\`

## Providing Context

Wrap your components with a Provider to supply the context value:

\`\`\`jsx
import ThemeContext from './ThemeContext';

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedButton />
    </ThemeContext.Provider>
  );
}
\`\`\`

## Consuming Context

There are two ways to consume context:

1. Using useContext hook:

\`\`\`jsx
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={\`btn-\${theme}\`}>
      I am styled based on the theme context!
    </button>
  );
}
\`\`\`

2. Using Consumer component:

\`\`\`jsx
import ThemeContext from './ThemeContext';

function ThemedButton() {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <button className={\`btn-\${theme}\`}>
          I am styled based on the theme context!
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
\`\`\`

## Advanced Usage with Reducer

You can combine Context with useReducer for more complex state management:

\`\`\`jsx
import { createContext, useReducer } from 'react';

const initialState = { /* your initial state */ };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error();
  }
}

const StateContext = createContext();
const DispatchContext = createContext();

function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}
\`\`\`

Context API offers a powerful built-in solution for state management in React applications without requiring external libraries.
    `,
    coverImage: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Context API", "State Management"],
    readTime: 6
  },
  {
    id: "4",
    title: "Setting Up a CI/CD Pipeline for Your React Application",
    author: "Alex Chen",
    date: "2025-03-28",
    excerpt: "Automate your deployment process with a robust CI/CD pipeline for React applications.",
    content: `
# Setting Up a CI/CD Pipeline for Your React Application

Continuous Integration and Continuous Deployment (CI/CD) are essential practices for modern web development that help teams deliver code changes more frequently and reliably.

## Why CI/CD?

A good CI/CD pipeline:

- Catches bugs early
- Ensures code quality
- Automates repetitive tasks
- Provides faster feedback
- Enables frequent releases

## GitHub Actions for CI/CD

GitHub Actions offers a simple way to set up a CI/CD pipeline right from your repository. Here's how to set up a basic workflow:

1. Create a workflow file at \`.github/workflows/ci-cd.yml\`:

\`\`\`yaml
name: React CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      if: success() && github.ref == 'refs/heads/main'
      uses: JamesIves/github-pages-deploy-action@4.1.4
      with:
        branch: gh-pages
        folder: build
\`\`\`

## Automating Testing

Include automated tests in your pipeline:

\`\`\`jsx
// Button.test.js
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

test('calls onClick when clicked', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  
  fireEvent.click(getByText('Click Me'));
  
  expect(handleClick).toHaveBeenCalledTimes(1);
});
\`\`\`

## Environment-Specific Configurations

Handle different environments with environment variables:

\`\`\`jsx
// config.js
const config = {
  apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  environment: process.env.NODE_ENV || 'development'
};

export default config;
\`\`\`

A well-configured CI/CD pipeline saves development time, improves code quality, and allows for faster iteration on your React application.
    `,
    coverImage: "https://images.unsplash.com/photo-1664575198263-269a022d6e14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["DevOps", "CI/CD", "Automation"],
    readTime: 7
  },
  {
    id: "5",
    title: "Optimizing React Performance",
    author: "Lisa Parker",
    date: "2025-03-20",
    excerpt: "Learn techniques for improving the performance of your React applications.",
    content: `
# Optimizing React Performance

Performance optimization is crucial for providing a good user experience in React applications. This guide covers key techniques to make your React app faster and more efficient.

## Identifying Performance Issues

Before optimizing, identify bottlenecks using React's built-in tools:

- React DevTools Profiler
- Performance tab in Chrome DevTools
- \`why-did-you-render\` library

## React.memo and Pure Components

Prevent unnecessary re-renders with \`React.memo\`:

\`\`\`jsx
const MemoizedComponent = React.memo(function MyComponent(props) {
  // Your component code
});
\`\`\`

## Code Splitting

Split your code into smaller chunks that can be loaded on demand:

\`\`\`jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

## Virtualization for Long Lists

Use virtualization for rendering only the visible items in a long list:

\`\`\`jsx
import { FixedSizeList as List } from 'react-window';

function App() {
  const items = new Array(1000).fill().map((_, index) => ({
    id: index,
    name: \`Item \${index}\`
  }));

  const Row = ({ index, style }) => (
    <div style={style}>
      {items[index].name}
    </div>
  );

  return (
    <List
      height={500}
      width={300}
      itemCount={items.length}
      itemSize={50}
    >
      {Row}
    </List>
  );
}
\`\`\`

## Optimizing Context

Avoid putting too much data in a single context, split contexts by functionality:

\`\`\`jsx
// Instead of one large context
const AppContext = createContext();

// Split into focused contexts
const ThemeContext = createContext();
const UserContext = createContext();
const SettingsContext = createContext();
\`\`\`

## Using useCallback and useMemo

Memoize functions and computed values:

\`\`\`jsx
function SearchResults({ query, data }) {
  // Memoize expensive calculation
  const results = useMemo(() => {
    return data.filter(item => item.name.includes(query));
  }, [data, query]);

  // Memoize callback function
  const handleItemSelect = useCallback((id) => {
    console.log('Selected:', id);
  }, []);

  return (
    <ul>
      {results.map(item => (
        <li key={item.id} onClick={() => handleItemSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

By applying these optimization techniques, you can significantly improve your React application's performance, leading to a better user experience.
    `,
    coverImage: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    tags: ["React", "Performance", "Optimization"],
    readTime: 8
  },
  {
    id: "6",
    title: "Creating Custom React Hooks",
    author: "David Miller",
    date: "2025-03-15",
    excerpt: "Learn how to create reusable custom hooks to share logic across your React components.",
    content: `
# Creating Custom React Hooks

Custom hooks are a powerful feature in React that allows you to extract component logic into reusable functions. They follow the same rules as the built-in hooks and always start with "use".

## Why Custom Hooks?

Custom hooks help you:

- Reuse stateful logic between components
- Reduce component complexity
- Create more readable and maintainable code
- Share functionality across your application

## Creating Your First Custom Hook

Let's create a custom hook for handling form inputs:

\`\`\`jsx
import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  
  function handleChange(e) {
    setValue(e.target.value);
  }
  
  return {
    value,
    onChange: handleChange
  };
}

// Usage in a component
function LoginForm() {
  const username = useFormInput('');
  const password = useFormInput('');
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitting:', username.value, password.value);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" {...username} placeholder="Username" />
      <input type="password" {...password} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}
\`\`\`

## Custom Hook for API Requests

Here's a custom hook for data fetching:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) throw new Error(response.statusText);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Usage in a component
function UserProfile({ userId }) {
  const { data, loading, error } = useFetch(\`/api/users/\${userId}\`);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
\`\`\`

## Custom Hook for Local Storage

A hook to persist state to localStorage:

\`\`\`jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Get from local storage then
  // parse stored json or return initialValue
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save to state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'John');
  
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
    </div>
  );
}
\`\`\`

Custom hooks are a game-changer for React development, enabling better code organization and reusability across your entire application.
    `,
    coverImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80",
    tags: ["React", "Hooks", "JavaScript"],
    readTime: 6
  },
  {
    id: "7",
    title: "Implementing Authentication in React",
    author: "Emily Cooper",
    date: "2025-03-10",
    excerpt: "Learn how to add user authentication to your React application with best practices.",
    content: `
# Implementing Authentication in React

Authentication is a critical component of most web applications. This guide walks you through implementing a secure authentication system in your React application.

## Authentication Flow

A typical authentication flow consists of:

1. User registration
2. Login/authentication
3. Token storage
4. Protected routes
5. Auto-logout on token expiration

## Setting Up Context for Authentication

First, create an authentication context to manage user state:

\`\`\`jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Check if token exists on initial load
  useEffect(() => {
    const verifyToken = async () => {
      if (token) {
        try {
          // Verify with your API
          const response = await fetch('/api/verify-token', {
            headers: { Authorization: \`Bearer \${token}\` },
          });
          
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            // Token invalid
            logout();
          }
        } catch (error) {
          console.error('Auth error:', error);
          logout();
        }
      }
      setLoading(false);
    };

    verifyToken();
  }, [token]);

  const login = async (credentials) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) throw new Error('Login failed');
      
      const data = await response.json();
      
      localStorage.setItem('token', data.token);
      setToken(data.token);
      setUser(data.user);
      
      return true;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      token, 
      loading,
      isAuthenticated: !!user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
\`\`\`

## Creating Protected Routes

Implement route protection with React Router:

\`\`\`jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

// In your router configuration:
<Routes>
  <Route path="/login" element={<LoginPage />} />
  <Route path="/register" element={<RegisterPage />} />
  
  <Route element={<ProtectedRoute />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element={<Profile />} />
  </Route>
  
  <Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
\`\`\`

## Login Form Component

Here's a simple login form component:

\`\`\`jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const success = await login(credentials);
    
    if (success) {
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </div>
      
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button type="submit">Log In</button>
    </form>
  );
};
\`\`\`

## Token Refresh Strategy

To keep users logged in, implement a token refresh strategy:

\`\`\`jsx
// Inside AuthProvider

// Set up token refresh
useEffect(() => {
  if (!token) return;

  // Calculate time until token expiration (assuming your token has exp claim)
  const tokenData = JSON.parse(atob(token.split('.')[1]));
  const expiresAt = tokenData.exp * 1000; // Convert to milliseconds
  const timeUntilExpiry = expiresAt - Date.now();
  
  // If token is expired, logout
  if (timeUntilExpiry <= 0) {
    logout();
    return;
  }
  
  // Set up timer to refresh token before expiry (5 minutes before)
  const refreshTime = timeUntilExpiry - (5 * 60 * 1000);
  const refreshTimer = setTimeout(refreshToken, refreshTime);
  
  return () => clearTimeout(refreshTimer);
}, [token]);

const refreshToken = async () => {
  if (!token) return;
  
  try {
    const response = await fetch('/api/refresh-token', {
      headers: { Authorization: \`Bearer \${token}\` },
    });
    
    if (response.ok) {
      const { token: newToken } = await response.json();
      localStorage.setItem('token', newToken);
      setToken(newToken);
    } else {
      // If refresh fails, logout
      logout();
    }
  } catch (error) {
    console.error('Token refresh error:', error);
    logout();
  }
};
\`\`\`

A well-implemented authentication system enhances security and user experience in your React application. Remember to always handle sensitive data securely and validate tokens properly.
    `,
    coverImage: "https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Authentication", "Security"],
    readTime: 9
  },
  {
    id: "8",
    title: "Using TypeScript with React",
    author: "Tom Wilson",
    date: "2025-03-05",
    excerpt: "Learn how to leverage TypeScript to build more robust React applications.",
    content: `
# Using TypeScript with React

TypeScript adds static type-checking to JavaScript, which helps catch errors earlier in the development process and enhances the developer experience with better tooling and documentation.

## Setting Up TypeScript in a React Project

Start a new React project with TypeScript:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

Or add TypeScript to an existing project:

\`\`\`bash
npm install typescript @types/react @types/react-dom
\`\`\`

## Typing Component Props

Define interfaces for your component props:

\`\`\`tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ text, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button 
      className={\`btn btn-\${variant}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Usage
<Button 
  text="Click Me" 
  onClick={() => console.log('Clicked!')} 
  variant="primary" 
/>
\`\`\`

## Typing useState

Type your state variables with useState:

\`\`\`tsx
import { useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Rest of component
}
\`\`\`

## Typing Event Handlers

Proper typing for event handlers:

\`\`\`tsx
import { ChangeEvent, FormEvent } from 'react';

function LoginForm() {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // Process the input
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        onChange={handleInputChange} 
      />
      <button type="submit">Log In</button>
    </form>
  );
}
\`\`\`

## Typing Context

TypeScript with React Context:

\`\`\`tsx
import { createContext, useContext, ReactNode, useState } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
\`\`\`

## Typing Custom Hooks

Add types to your custom hooks:

\`\`\`tsx
import { useState, useEffect } from 'react';

interface UseFetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => Promise<void>;
}

function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(\`HTTP Error: \${response.status}\`);
      }
      
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)));
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [url]);
  
  return { data, loading, error, refetch: fetchData };
}

// Usage
interface Post {
  id: number;
  title: string;
  body: string;
}

function PostList() {
  const { data, loading, error } = useFetch<Post[]>('https://api.example.com/posts');
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  return (
    <ul>
      {data?.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
\`\`\`

TypeScript enhances the React development experience significantly by catching type errors early, providing better IDE support, and making code more self-documenting. These benefits become increasingly valuable as your application grows in size and complexity.
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "TypeScript", "JavaScript"],
    readTime: 8
  }
];
