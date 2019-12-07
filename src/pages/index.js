import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Grommet, Box, Heading, Text, Table, TableHeader, TableBody, TableCell, TableRow} from 'grommet'
import Theme from '../components/theme';

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

const PaddedContainer = ({children}) => (
  <Box pad={{left:'medium', right:'medium'}}>
    {children}
  </Box>
)

const Logo = () => (
  <Box pad={{left:'medium', right:'medium', top:'medium'}}>
    <Heading level={3}> denntenna </Heading>
  </Box>
)

const TableHeading = ({label}) => (
  <PaddedContainer>
    <Heading level={3}> {label} </Heading>
  </PaddedContainer>
)

const TableItem = ({label}) => (
  <PaddedContainer>
    <Text size={'medium'}> {label} </Text>
  </PaddedContainer>
)

const TableLink = ({target, label}) => (
  <PaddedContainer>
    <Link to={`/${target}`}>
      <Text size={'medium'}> {label} </Text> 
    </Link>
  </PaddedContainer>
)

const IndexPage = () => (
  <Grommet theme={Theme} full>
    <SEO title="Home" />

    <Logo/>
    
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'>
            <TableHeading label={'Date'}/>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <TableHeading label={'Title'}/>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <TableHeading label={'Description'}/>
          </TableCell>
          <TableCell scope='col' border='bottom'>
            <TableHeading label={'Tags'}/>
          </TableCell>
        </TableRow>
      </TableHeader>

      <TableBody>

        {
          index.map((item, index) => (
              <TableRow key={index}>
                <TableCell scope='row'> 
                  <TableItem label={item.date} /> 
                </TableCell>
                <TableCell scope='row'> 
                  <TableLink 
                    target={`/${item.target}`}
                    label={item.title}
                  />
                </TableCell>
                <TableCell scope='row'> 
                  <TableItem label={item.description} /> 
                </TableCell>
                <TableCell scope='row'> 
                  <TableItem label={item.tags} /> 
                </TableCell>
              </TableRow>
          ))
        }

      </TableBody>
    </Table>
  </Grommet>
)

export default IndexPage
