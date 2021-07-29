import React from 'react'
import { Card } from 'antd';
import { GithubOutlined, HomeOutlined, ReadOutlined} from '@ant-design/icons'

const { Meta } = Card;
function CardComponent(props) {
    return (
      <div>
        <Card
          hoverable
          style={{ width: 300, height: 350, display: "flex", flexDirection:"column", justifyContent:"space-between" }}
          cover={<img alt="example" src="" />}
          actions={[
            <HomeOutlined onClick={props.goHomeFunc}/>,
            <GithubOutlined onClick={() => window.open(props.githubLink, "_blank")}/>,
            <ReadOutlined onClick={()=> window.open(props.docLink, "_blank")}/>
          ]}
        >
          <Meta title="zz" description="www.instagram.com" />
        </Card>
    </div>
    )
}


export default CardComponent
