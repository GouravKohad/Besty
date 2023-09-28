class Besty {
  animate(element) {

    return new animation(element)
  }
  bg(element){
    return new bg(element)
  }
  text(element){
    return new text(element)
  }
  
  
}



class animation {
  constructor(element) {
    this.element = element
  }
  //swing animation 
  swing() {
    let el = document.querySelectorAll(this.element)
el.forEach((e)=>{
    try {
      let arr = Array.from(e.classList)
      arr.forEach((i) => {
        if (i == 'swing') {
          console.error('Animation is allowed')
        }
        else if (i == 'drop') {
          e.classList.remove('drop')
          console.warn('Drop animation allowed')
          e.classList.add('swing')
        }
        else if (i == 'fade') {
          e.classList.remove('fade')
          e.classList.add('swing')
          console.warn('Fade animation allowed')
        }
        else if (i == 'upDance') {
          e.classList.remove('upDance')
          e.classList.add('swing')
          console.warn('upDance animation allowed')
        }
        else {
          e.classList.add('swing')
        }

      })
    }
    catch (e) {
      console.error(e)
    }
    finally {
      e.classList.add('swing')
    }
})
  }

  //fade animation 
  fade() {
    let el = document.querySelectorAll(this.element)
el.forEach((e)=>{
    try {
      let arr = Array.from(e.classList)
      arr.forEach((i) => {
        if (i == 'fade') {
          console.error('Animation is allowed')
        }
        else if (i == 'drop') {
          e.classList.remove('drop')
          console.warn('Drop animation allowed')
          e.classList.add('fade')
        }
        else if (i == 'swing') {
          e.classList.remove('swing')
          e.classList.add('fade')
          console.warn('Swing animation allowed')
        }
        else if (i == 'upDance') {
          e.classList.remove('upDance')
          e.classList.add('fade')
          console.warn('upDance animation allowed')
        }
        else {
          e.classList.add('fade')
        }

      })
    }
    catch (e) {
      console.error(e)
    }
    finally {
      e.classList.add('fade')
    }
})

  }


  //upDance animation

  upDance() {
    let el = document.querySelectorAll(this.element)
el.forEach((e)=>{
    try {
      let arr = Array.from(e.classList)
      arr.forEach((i) => {
        if (i == 'upDance') {
          console.error('Animation is allowed')
        }
        else if (i == 'fade') {
          e.classList.remove('fade')
          console.warn('Fade animation allowed')
          e.classList.add('upDance')
        }
        else if (i == 'swing') {
          e.classList.remove('swing')
          e.classList.add('upDance')
          console.warn('Swing animation allowed')
        }
        else if (i == 'downDance') {
          e.classList.remove('downDance')
          e.classList.add('upDance')
          console.warn('downDance animation allowed')
        }
        else {
          e.classList.add('upDance')
        }

      })
    }
    catch (e) {
      console.error(e)
    }
    finally {
      e.classList.add('upDance')
    }
})

  }
  //downDance animation 
  downDance() {
    let el = document.querySelectorAll(this.element)
    e.forEach((e)=>{
    try {
      let arr = Array.from(e.classList)
      arr.forEach((i) => {
        if (i == 'downDance') {
          console.error('Animation is allowed')
        }
        else if (i == 'fade') {
          e.classList.remove('fade')
          console.warn('Fade animation allowed')
          e.classList.add('downDance')
        }
        else if (i == 'swing') {
          e.classList.remove('swing')
          e.classList.add('downDance')
          console.warn('Swing animation allowed')
        }
        else if (i == 'upDance') {
          e.classList.remove('upDance')
          e.classList.add('downDance')
          console.warn('upDance animation allowed')
        }
        else {
          e.classList.add('downDance')
        }

      })
    }
    catch (e) {
      console.error(e)
    }
    finally {
      e.classList.add('downDance')
    }
    })
  }

  speed(time) {

    let el = document.querySelectorAll(this.element)
el.forEach((e)=>{
    e.style.animationDuration = time
  
})}
}

//bg class setup
class bg{
  constructor(element){
    this.element=element
  }
  gradient(gradientNumber){
    let el = document.querySelectorAll(this.element)
    if(typeof gradientNumber =='number'){
      if(gradientNumber>0&&gradientNumber<=12){
        el.forEach((e)=>{
          
        
    switch (gradientNumber) {
      case 1:
        e.style.background=' linear-gradient(to right top, #FF9A9EFF, #FAD0C4FF)' 
        break;
        
        case 2:
          e.style.background = 'linear-gradient(to right top, #A18CD1FF, #FBC2EBFF)'
        break;
        
        case 3:
          e.style.background = ' linear-gradient(to right top, #43E97BFF, #38F9D7FF)'
        break;
        
        
        case 4:
          e.style.background = 'linear-gradient(to right top, #FA709AFF, #FEE140FF)'
        break;
        
        
        case 5:
          e.style.background = ' linear-gradient(to right top, #FF9A9EFF, #FAD0C4FF)'
        break;
        
        
        case 6:
          e.style.background = ' linear-gradient(to right top, #30CFD0FF, #330867FF)'
        break;
        
        
        case 7:
          e.style.background = ' linear-gradient(to right top, #45136AFF, #A000FFFF)'
        break;
        
        case 8:
          e.style.background = ' linear-gradient(to right top, #89F7FEFF, #66A6FFFF)'
        break;
        
        case 9:
          e.style.background = ' linear-gradient(to right top, #6A11CBFF, #2575FCFF)'
        break;
        
        
        case 10:
          e.style.background = ' linear-gradient(to right top, #48C6EFFF, #6F86D6FF)'
        break;
      
      
      case 11:
        e.style.background = ' linear-gradient(to right top, #88D3CEFF, #6E45E2FF)'
      break;
      
      
      case 12:
        e.style.background = ' linear-gradient(to right top, #FF758CFF, #FF7EB3FF)'
      break;
      default :
        e.style.background=' linear-gradient(to right top, #FF9A9EFF, #FAD0C4FF)' 
      break;
    } 
        })
      }
      else{
        console.error('Invaild Number enter number between 1 to 12')
      }
    }
    else{
      console.error('Enter a number')
      
    }
    
   
  }
}

//Text class setup
class text{
  constructor(element){
    this.element = element
  }
  stroke(borderSize,borderColor){
    let el =document.querySelectorAll(this.element)
    
    el.forEach((e)=>{
      e.style.webkitTextStroke = `${borderSize}  ${borderColor}`
      
    })
    
    
  }
  color(color){
        let el = document.querySelectorAll(this.element)
    
        el.forEach((e) => {
          e.style.color=color
    
        })
  }
  img(imgUrl) {
    let el = document.querySelectorAll(this.element)
    el.forEach((e) => {
      
    e.style.backgroundImage=`url(${imgUrl})`
    e.style.backgroundSize='cover'
    e.style.backgroundClip='text'
    e.style.backgroundPosition='center'
    e.style.webkitBackgroundClip='text'
    e.style.color='transparent'
    
    })
  }
}






//Run as besty

const besty = new Besty()