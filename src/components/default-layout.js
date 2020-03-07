import React, { useState, useEffect } from 'react'
import {Grommet, Box} from 'grommet'
import Logo from './logo';
import SEO from './seo';
import Theme from './theme';

/**
* @author
* @function DefaultLayout
**/

const DefaultLayout = ({children}) => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <Grommet theme={Theme} full>
            <Box direction={'column'}>
                <SEO title="Home" />

                <Logo/>

                <Box pad={'medium'}>
                    {children}
                </Box>
            </Box>
        </Grommet>
    )
}

export default DefaultLayout