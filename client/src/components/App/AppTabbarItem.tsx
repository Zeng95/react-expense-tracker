import { FileText, PieChart, Tag } from '@styled-icons/feather'
import { themes } from 'components/Shared/Styles'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'

interface Props {
  icon: string
  routePath: string
  routeName: string
}

const TabbarItemStyled = styled.li.attrs({
  className: 'flex-1'
})`
  a {
    ${tw`flex items-center flex-col`}
    padding: 4px;

    .icon {
      height: 24px;
      width: 24px;

      &-tag {
        transform: rotate(90deg);
      }
    }

    &.selected {
      .icon {
        color: white;
        fill: ${themes.color};
      }

      span {
        color: ${themes.color};
      }
    }
  }
`

const TabbarItem: React.FunctionComponent<Props> = props => {
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
      <NavLink to={routePath} activeClassName="selected">
        {getIcon(icon)}
        <span>{routeName}</span>
      </NavLink>
    </TabbarItemStyled>
  )
}

export default TabbarItem
