import React from 'react';
import { useState } from 'react'
import FilmItem from './FilmItem'
import Categories from './Filter'
import FilmFilter from './FilmFilter';

import './App.css';
function WatchingList(props) {
	
	const [titleFilter, setTitleFilter] = useState("")
	const filmList = props.filmList
	console.log(filmList)

	const handleTitleChang= (val)=>{
		setTitleFilter(val)
		}
	const [activeCategory, setActiveCategory] = useState('')
	const categories = filmList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)
	
	
	return (
		<div className='watching-list'>
			<div className='categories'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
			<FilmFilter handleTitleChang={handleTitleChang} />
		
			
			</div>

			<ul className='film-list'>
				{filmList.map(({ cover, name, stars, quality, category, desc, year,link }) =>
					(!activeCategory || activeCategory === category)&& (name.toLocaleLowerCase().includes(titleFilter.toLocaleLowerCase())) ? (
						<div key={name}>
							<FilmItem
								cover={cover}
								name={name}
								stars={stars}
								quality={quality}
                                desc={desc}
                                year={year}
                                category={category}
                                link={link}
							/>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default WatchingList;