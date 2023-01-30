import { createElement } from 'react'
import TypeSelect from './TypeSelect'
import DeepCreate from './DeepCreate'
import StyleCreate from './StyleCreate'
import AssetDetail from './AssetDetail'

export const routes = [
  {
    title: 'Select Type | Create New NFT',
    key: 'select asset type',
    path: '/',
    element: createElement(TypeSelect),
  },
  {
    title: 'Create Deep | Create New NFT',
    key: 'create new deep',
    path: '/deepnft',
    element: createElement(DeepCreate),
  },
  {
    title: 'Create Style | Create New NFT',
    key: 'create new style',
    path: '/style',
    element: createElement(StyleCreate),
  },
  {
    title: 'Asset Detail | Create New NFT',
    key: 'asset detail',
    path: '/detail',
    element: createElement(AssetDetail),
  },
]
