import React from 'react'
import Button from '../elements/Button'
import Fade from 'react-reveal/Fade';

export default function Categories({ data }) {
  return data.map( (category, index1) => {
    return (
        <Fade bottom>
            <section className='container' key={`category-${index1}`}>
                <h4 className='mb-3 font-weight-medium'>
                    {category.name}
                </h4>
                <div className='container-grid'>
                    {
                        category.items.length === 0 ? <div className='row'>
                            <div className='col-auto align-items-center'>
                                There is no property at category
                            </div>
                        </div> : category.items.map((item, index2) => {
                            return (
                                <Fade bottom delay={500*index2}>
                                    <div className='item column-3 row-1' key={`category-${index2}-item-${index2}`}>
                                        <div className='card'>
                                            { 
                                                item.isPopular && 
                                                <div className='tag'>
                                                    Popular{" "} <span className='font-weight-light'>Choice</span>
                                                </div>
                                            }
                                            <figure className='"img-wrapper' style={{ height:180 }}>
                                                <img src={item.imageUrl} alt={item.name} className="img-cover" />
                                            </figure>
                                            <div className='meta-wrapper'>
                                                <Button type="link" href={`/properties/${item._id}`} className='stretched-link d-block text-gray-800'>
                                                    <h5 className='h4'>
                                                        {item.name}
                                                    </h5>
                                                </Button>
                                                <span className='tect-gray-500'>
                                                    {item.city}, {item.country}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })
                    }
                </div>
            </section>
        </Fade>
    )
  })
}
