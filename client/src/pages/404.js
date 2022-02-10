import Link from 'next/link'
import './404.css';
import App from './App';
​
const NotFound = () => {
    return (
        <div className = "not-found" >
            <h1> 404 Error</h1>
            <h2> This page doesn't exist</h2>
           <p> Click here to return <Link href="/"><a>IndexPage   </a></Link></p>
            </div>
    );
} 
​
export default NotFound;
​
/*
Need to check line 10 to see how to return to homepage (I wrote it as IndexPage)
but depending on time we might not be able to do it so once that works line 1 wll too
​
*/