import { FileText, PieChart, Tag } from '@styled-icons/feather'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface Props {
  icon: string
  routePath: string
  routeName: string
}

const TabbarItemStyled = styled.nav`
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

class TabbarItem extends Component<Props> {
  getIcon(icon: String) {
    if (icon === 'tag') {
      return <Tag className="icon icon-tag" />
    } else if (icon === 'file-text') {
      return <FileText className="icon" />
    } else if (icon === 'pie-chart') {
      return <PieChart className="icon" />
    }
  }

  render() {
    const { icon, routePath, routeName } = this.props

    return (
      <TabbarItemStyled>
        <Link to={routePath}>
          {this.getIcon(icon)}
          <span>{routeName}</span>
        </Link>
      </TabbarItemStyled>
    )
  }
}

export default TabbarItem
