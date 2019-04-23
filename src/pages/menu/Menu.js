import React, { Component } from 'react';
import axios from 'axios';
import { 
    DishWrapper, 
    DishContent, 
    Dish, 
    DishTitle, 
    MenuWrapper 
} from './menu-styles';
import '../../App';

class Menu extends Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount()  {
        axios
          .get(`https://otaku-catering-backend.herokuapp.com/`)
          .then(res => {
            console.log(res, 'response')
            this.setState({
              data: res.data.dishData
            })
          })
          .catch(err => {
            console.log(err)
          })
    }
    render () {
    return (
        <MenuWrapper>
            <h1>Catering Menu</h1>
            <DishWrapper>
                
                <DishContent>
            {this.props.dishes.map(dish => {
                console.log(dish, 'in dish')
                return (
                    
                    <Dish key={dish.id}>
                            
                            <div className='dish-image'>
                                <img src={ `https://otaku-catering-backend.herokuapp.com/${dish.imageUrl} `}  className='dish-url' alt={dish.name}/>
                                
                            </div>
                            <DishTitle>
                                <h3>{dish.name}</h3>
                                </DishTitle>
                            {/* <h5>{dish.description}</h5> */}
                    </Dish>
                    
                )
            })}
                </DishContent>
            </DishWrapper>
        </MenuWrapper>
    )}
};
// const Menu = (props) => {
//     return (
//         <MenuWrapper>
//             <h1>Catering Menu</h1>
//             <DishWrapper>
                
//                 <DishContent>
//             {props.dishes.map(dish => {
//                 console.log(dish, 'in dish')
//                 return (
                    
//                     <Dish key={dish.id}>
                            
//                             <div className='dish-image'>
//                                 <img src={ `http://localhost:8080/${dish.imageUrl} `}  className='dish-url' alt={dish.name}/>
                                
//                             </div>
//                             <DishTitle>
//                                 <h3>{dish.name}</h3>
//                                 </DishTitle>
//                             {/* <h5>{dish.description}</h5> */}
//                     </Dish>
                    
//                 )
//             })}
//                 </DishContent>
//             </DishWrapper>
//         </MenuWrapper>
//     )
// };

export default Menu