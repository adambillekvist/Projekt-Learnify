import React, { useEffect, useState } from 'react'
import { Table } from 'antd'
import agent from '../actions/agent'
import * as FaIcons from 'react-icons/fa'
import { Basket, CourseItem } from '../models/basket'

const BasketPage = () => {
  const [items, setItems] = useState<Basket | null>()

  const removeBasketItem = (courseId: string) => {
    agent.Baskets.removeItem(courseId).catch((error) => {
      console.log(error)
    })
  }

  const newData = (items: Basket | null) => {
    items?.items.map((item: CourseItem, index: number) =>
      Object.assign(item, { key: index }),
    )
    setItems(items)
  }

  useEffect(() => {
    agent.Baskets.get().then((response) => {
      newData(response)
    })
  }, [])

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (url: string) => {
        return <img width="100px" src={url} alt={url} />
      },
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Instructor',
      key: 'instructor',
      dataIndex: 'instructor',
    },
    {
      title: 'Action',
      key: 'action',
      render: (item: CourseItem) => (
        <div onClick={() => removeBasketItem(item.courseId)}>
          <FaIcons.FaTrash />
        </div>
      ),
    },
  ]

  return (
    <>
      <div className="basket-page">
        <h1 className="basket-page__header">Shopping Cart</h1>
        <Table columns={columns} dataSource={items?.items} />
      </div>
    </>
  )
}

export default BasketPage