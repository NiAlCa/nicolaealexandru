import { CurrentlyWork } from '../CurrentlyWork/CurrentlyWork'
import { Description } from '../Description/Description'
import { LastSong } from '../LastSong/LastSong'
import { RandomThings } from '../RandomThings/RandomThings'
import { Skills } from '../Skills/Skills'
import { SomeProjects } from '../SomeProjects/SomeProjects'
import './Info.scss'

export function Info () {


    return(
    <div className="Info">
  <div className='InfoDescription'>
  
    <Description/>

  </div>
  

  <div className='InfoWidgets'>

<div className='InfoWidgetsTech'>

    <Skills/>

</div>

<div className='InfoWidgetsWorks'>
<div className='InfoContenetor'>
    <CurrentlyWork/></div>
    <div className='InfoContenetor'> <SomeProjects/> </div>
    
</div>


  </div>

  <div className='InfoWidgetsBottom'>
  <div className='InfoContenetor'>
    <LastSong/> 
    </div>

    <div className='InfoContenetor'>
    <RandomThings/>
    </div>


  </div>

   
    </div>
)}