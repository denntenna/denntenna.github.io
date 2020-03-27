import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

import {Grommet, Box, Heading, Text, Table, TableHeader, TableBody, TableCell, TableRow} from 'grommet'
import Theme from '../components/theme';
import Logo from '../components/logo';
import { PlainExternalLink } from '../components/Links';

const index = [
  {
    date:'27.03.2020',
    title: 'Khoj',
    description: 'A search engine for fact check articles',
    tags: 'technologist, ux, pm',
    target: 'https://services.tattle.co.in/khoj'
  }
]

const PaddedContainer = ({children}) => (
  <Box pad={{left:'medium', right:'medium'}}>
    {children}
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
    {
      target.startsWith('http') ?
      <PlainExternalLink href={target} target={'_blank'}>
        <Text size={'medium'}> {label} </Text> 
      </PlainExternalLink>
      :
      <Link to={`/${target}`}>
        <Text size={'medium'}> {label} </Text> 
      </Link>
    }
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
                    target={`${item.target}`}
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
