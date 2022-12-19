import React from 'react';
import { motion } from 'framer-motion';

const orderVariant = {
  hidden: {
    opacity : 0,
    x :'100vw'
  },
  vissible : {
    opacity: 1,
    x : 0,
    transition: {
      delay: 0.5,
      type: 'spring',
      when: "beforeChildren"
    }
  }
}
const childVariant= {
  hidden:{
    opacity : 0
  },
  vissible :{
    opacity: 1
  }
}
const Order = ({ pizza }) => {
  return (
    <motion.div
      variants = {orderVariant}
      initial="hidden"
      animate= "vissible"
      className="container order">
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant}>You ordered a {pizza.base} pizza with:</motion.p >
      <motion.div variants={childVariant}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
      
    </motion.div>
  )
}

export default Order;