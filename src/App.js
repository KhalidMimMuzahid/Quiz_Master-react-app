import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import HomeTopicQuiz from './components/Home/HomeTopicQuiz/HomeTopicQuiz';
import Blog from './components/Blog/Blog';
import BlogQues1 from './components/Blog/BlogQues1/BlogQues1';
import BlogQues2 from './components/Blog/BlogQues2/BlogQues2';
import BlogQues3 from './components/Blog/BlogQues3/BlogQues3';
import DefaultBlogBody from './components/Blog/DefaultBlogBody/DefaultBlogBody';
import DefaultHomeBody from './components/Home/DefaultHomeBody/DefaultHomeBody';

function App() {
  const router= createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>
        },
        {
          path:"/home",
          loader: ()=>fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
          children:[
            {
              path:"/home",
              element: <DefaultHomeBody></DefaultHomeBody>
            },
            {
              path:"/home:topicID",
              loader: async({params})=>{
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicID}`)
              },
              element: <HomeTopicQuiz></HomeTopicQuiz>
            },
          ]

        },
        {
          path:"/blog",
          // loader: ()=>fetch('data.json'),
          element: <Blog></Blog>,
          children:[
            {
              path:"/blog",
              element: <DefaultBlogBody></DefaultBlogBody>
            },
            {
              path:"/blog/1",
              element: <BlogQues1></BlogQues1>
            },
            {
              path:"/blog/2",
              element: <BlogQues2></BlogQues2>
            },
            {
              path:"/blog/3",
              element: <BlogQues3></BlogQues3>
            },
          ]

        },
      ]
    },
    {
      path: "*",
      element: <h1>this is invalid page</h1>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
