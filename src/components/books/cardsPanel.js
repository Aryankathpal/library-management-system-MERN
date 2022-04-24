import {Card} from '../cards';
import '../../css/card.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { BallTriangle, TailSpin } from  'react-loader-spinner'


export const CardsPanel=({data})=>{

    const responsive = {
        desktop: {
        breakpoint: { max: 3000, min: 1024 },
          items: 4.5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
          }
    }
    return(
        <div className='tops'>
        
        <div className='row'>
          {}
          {data.length==0?<TailSpin color="#00BFFF" height={80} width={80} />:<>
            <h5 className='category'>{data[0].category}</h5>
            <Carousel responsive={responsive}
            draggable={false}
            swipeable={false}
            autoPlay={false}
            autoPlaySpeed={10000000000}
            >
            
            
            <Card image={data[0].image}
            name={data[0].name}
            author={data[0].author}
            isbn={data[0].isbn}
            copies={data[0].copies}
            />
            <Card image={data[1].image}
            name={data[1].name}
            author={data[1].author}
            isbn={data[1].isbn}
            copies={data[1].copies}
            />
            <Card image={data[2].image}
            name={data[2].name}
            author={data[2].author}
            isbn={data[2].isbn}
            copies={data[2].copies}
            />
            <Card image={data[3].image}
            name={data[3].name}
            author={data[3].author}
            isbn={data[3].isbn}
            copies={data[3].copies}
            />
            <Card image={data[4].image}
            name={data[4].name}
            author={data[4].author}
            isbn={data[4].isbn}
            copies={data[4].copies}
            />
            <Card image={data[5].image}
            name={data[5].name}
            author={data[5].author}
            isbn={data[5].isbn}
            copies={data[5].copies}
            />
            <Card image={data[6].image}
            name={data[6].name}
            author={data[6].author}
            isbn={data[6].isbn}
            copies={data[6].copies}
            />
            <Card image={data[7].image}
            name={data[7].name}
            author={data[7].author}
            isbn={data[7].isbn}
            copies={data[7].copies}
            />
            <Card image={data[8].image}
            name={data[8].name}
            author={data[8].author}
            isbn={data[8].isbn}
            copies={data[8].copies}
            />
            <Card image={data[9].image}
            name={data[9].name}
            author={data[9].author}
            isbn={data[9].isbn}
            copies={data[9].copies}
            />
            {/* <Card /> */}
            
            </Carousel>
            </>}
        </div>
        <hr />
        </div>
    )
}