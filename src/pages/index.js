import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Grommet, Box, Heading, Text, Table, TableHeader, TableBody, TableCell, TableRow} from 'grommet'

const index = [
  {
    date:'02.06.1990',
    title: 'Genesis',
    description: 'Mauris ac dui ac ipsum egestas placerat. Fusce laoreet imperdiet sem. Praesent sit amet sapien at mi luctus maximus. Ut vel luctus justo.',
    tags: 'abc, def, ghi, jkl',
    target: '/genesis'
  },
  {
    date:'02.06.1990',
    title: 'Genesis',
    description: 'Mauris ac dui ac ipsum egestas placerat. Fusce laoreet imperdiet sem. Praesent sit amet sapien at mi luctus maximus. Ut vel luctus justo.',
    tags: 'abc, def, ghi, jkl',
    target: '/genesis'
  },
  {
    date:'02.06.1990',
    title: 'Genesis',
    description: 'Mauris ac dui ac ipsum egestas placerat. Fusce laoreet imperdiet sem. Praesent sit amet sapien at mi luctus maximus. Ut vel luctus justo.',
    tags: 'abc, def, ghi, jkl',
    target: '/genesis'
  },
  {
    date:'02.06.1990',
    title: 'Genesis',
    description: 'Mauris ac dui ac ipsum egestas placerat. Fusce laoreet imperdiet sem. Praesent sit amet sapien at mi luctus maximus. Ut vel luctus justo.',
    tags: 'abc, def, ghi, jkl',
    target: '/genesis'
  },
  {
    date:'02.06.1990',
    title: 'Genesis',
    description: 'Mauris ac dui ac ipsum egestas placerat. Fusce laoreet imperdiet sem. Praesent sit amet sapien at mi luctus maximus. Ut vel luctus justo.',
    tags: 'abc, def, ghi, jkl',
    target: '/genesis'
  }
]

const IndexPage = () => (
  <Grommet full>
    <SEO title="Home" />

    <Heading level={3}>denntenna </Heading>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'>
            <Heading level={2}> Date </Heading>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <Heading level={2}> Title </Heading>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <Heading level={2}> Description </Heading>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <Heading level={2}> Tags </Heading>
          </TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>

        {
          index.map((item, index) => (
              <TableRow key={index}>
                <TableCell scope='row'> <Text size={'medium'}> {item.date} </Text> </TableCell>
                <TableCell scope='row'> 
                  <Link to={`/${item.target}`}>
                    <Text size={'medium'}> {item.title} </Text> 
                  </Link>
                </TableCell>
                <TableCell scope='row'> <Text size={'medium'}> {item.description} </Text> </TableCell>
                <TableCell scope='row'> <Text size={'medium'}> {item.tags} </Text> </TableCell>
              </TableRow>
          ))
        }

      </TableBody>
    </Table>
  </Grommet>
)

export default IndexPage
