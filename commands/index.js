import React,{useState,useEffect} from 'react';
import {Text, Box, Newline} from 'ink';
import axios from 'axios';


/// Hello world command
const Hello = () => {
	const [news, setNews] = useState([]);
	useEffect(()=>{
		axios.get('http://newsapi.org/v2/top-headlines?country=in&apiKey=c825f4b3897a46a8acd0dd404e95b4b2').then((response)=>{
			// console.log(response.data.articles);
			const data = (response.data.articles || []).map((article) => {
				return {author: article.author,title: article.title,description:article.description,url: article.url};
			});
			setNews(data);
		}).catch(err => console.log(err));
	},[]);
	return (
		<>
			{!news.length ? (
				<Text>
					Hello!
				</Text>):(
				<>
					{news.map((n) => {
						return (
							<><Text>{n.url}</Text><Newline /></>
						);
					})}
				</>

				)
			}
		</>

	);
};


export default Hello;
