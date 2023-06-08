import { Layout } from 'Layouts/Layouts';
import SectionInteres from 'component/Page_InfoMovie/Section_Interest/Section_Interes';
import SectionLeft from 'component/Page_InfoMovie/Section_Left/Section_Left';
import SectionRight from 'component/Page_InfoMovie/Section_Right/Section_Right';
import React from 'react'

const Info = (props) => {
  const { metaSite, adsPage, mainMenu, footerMenu, topicsMenu } = props;
  return (
    <Layout
      data={metaSite}
      hideAdTop
      dataHeader={mainMenu}
      dataFooter={footerMenu}
      topicMenu={topicsMenu}
      prebid={"HOME"}
      adsPage={adsPage}
      listNote={[]}
    >

      <div className='containerInfo'>
        <div className='container_left'>
          <SectionLeft />
        </div>
        <div className='container_right'>
          <SectionRight />
        </div>
      </div>
      <SectionInteres />
      <style >{
        `.containerInfo{
          display:flex;
          flex-direction:column;
        }
        .container_left{
        
        }
        @media (min-width: 768px) {
          .containerInfo{
            flex-direction:row;
            justify-content:space-between;
          }
          .container_left{
            width:35%;
          }
          .container_right{
            width:63%;
          }
        }
        @media (min-width: 999px) {
          .container_left{
            width:calc(100% - 656px);
          }
          .container_right{
            width:632px;
          }
        }
  
  `

      }

      </style>

    </Layout >)
}

export default Info