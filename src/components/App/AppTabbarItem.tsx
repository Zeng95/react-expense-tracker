import { FileText, PieChart, Tag } from '@styled-icons/feather'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  icon: string
  routePath: string
  routeName: string
}

const TabbarItemStyled = styled.li`
  flex: 1;

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 7px;

    .icon {
      height: 24px;
      width: 24px;

      &-tag {
        transform: rotate(90deg);
      }
    }
  }
`

const TabbarItem: React.FunctionComponent<Props> = (props) => {
  function getIcon(icon: String) {
    if (icon === 'tag') {
      return <Tag className="icon icon-tag" />
    } else if (icon === 'file-text') {
      return <FileText className="icon" />
    } else if (icon === 'pie-chart') {
      return <PieChart className="icon" />
    }
  }

  const { icon, routePath, routeName } = props

  return (
    <TabbarItemStyled>
      <Link to={routePath}>
        {getIcon(icon)}
        <span>{routeName}</span>
      </Link>
    </TabbarItemStyled>
  )
}

export default TabbarItem
