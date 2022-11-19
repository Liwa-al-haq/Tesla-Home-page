// import { FormatUnderlined } from '@material-ui/icons'
import React from 'react'
import Button from './Button'
import './item.css'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const item = ({title,desc,backgroundImg,leftBtnTxt,leftBtnLink,rightBtnTxt,rightBtnLink,twoButtons,first}) => {
  return (
    <div className='item' style={{
        backgroundImage:`url(${backgroundImg})`
    }}>

        <div className='item_container'>
            <div className="item_text">
                <p>{title}</p>
                <div className='item_textDesc'>
                    <p>{desc}</p>
            </div>
        </div>
        <div className='item_lowerThird'>
                <div className='item_buttons'>
                    <a href='order.html' ><Button imp='primary' text={leftBtnTxt} link={leftBtnLink}/></a>
                    {twoButtons && (
                        <Button imp="secondary" text={rightBtnTxt} link={rightBtnLink}/>
                    )}
                </div>
                {first && (
                    <div className='item_expand'>
                        {/* <ExpandMoreIcon /> */}
                    </div>
                )}
                {/* <img src="https://myteslaclone.azureedge.net/images/down-arrow.svg" class="sc-iqseJM gEDmBr"></img> */}
            </div>
        </div>

    </div>
  )
}

export default item