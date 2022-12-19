import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const toppingVariant = {
  hidden: {
    opacity : 0,
    x :'100vw'
  },
  vissible : {
    opacity: 1,
    x : 0,
    transition: {
      delay: 0.5,
      type: 'spring'
    }
  }
}
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes', 'spring'];

  return (
    <motion.div 
    variants = {toppingVariant}
    initial="hidden"
    animate= "vissible"
    className="toppings container">
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li whileHover={{scale: 1.3, originX : 0, color: '#fe8112'}}
              transition={{ type:'spring', stiffness: 300 }} key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
        whileHover={{
          scale : 1.1,
          textShadow: '0px 0px 8px rgb(255, 255,255)',
          boxShadow:'0px 0px 8px rgb(255, 255,255)'

        }}>
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;