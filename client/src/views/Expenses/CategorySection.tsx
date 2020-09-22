import { FastFood, Shirt } from '@styled-icons/ionicons-solid'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const CategorySectionStyled = styled.section`
  margin: 20px 0 20px 20px;
`
const CategoryList = styled.ol.attrs({
  className: 'flex'
})``
const CategoryListItem = styled.li.attrs({
  className: 'flex flex-col items-center'
})`
  margin-right: 20px;

  > span {
    font-size: 12px;
  }
`
const CategoryIcon = styled.div.attrs({
  className: 'flex rounded-full'
})`
  background-color: #ececec;
  height: 32px;
  margin-bottom: 10px;
  padding: 6px;
  width: 32px;

  .icon {
    ${tw`w-full h-full`}
    fill: #c7c7c7;
  }
`

const CategorySection: FunctionComponent = () => {
  return (
    <CategorySectionStyled>
      <CategoryList>
        <CategoryListItem>
          <CategoryIcon>
            <Shirt className="icon" />
          </CategoryIcon>
          <span>服饰美容</span>
        </CategoryListItem>

        <CategoryListItem>
          <CategoryIcon>
            <FastFood className="icon" />
          </CategoryIcon>
          <span>餐饮</span>
        </CategoryListItem>

        <CategoryListItem>
          <CategoryIcon>
            <FastFood className="icon" />
          </CategoryIcon>
          <span>餐饮</span>
        </CategoryListItem>

        <CategoryListItem>
          <CategoryIcon>
            <FastFood className="icon" />
          </CategoryIcon>
          <span>餐饮</span>
        </CategoryListItem>
      </CategoryList>
    </CategorySectionStyled>
  )
}

export { CategorySection }
