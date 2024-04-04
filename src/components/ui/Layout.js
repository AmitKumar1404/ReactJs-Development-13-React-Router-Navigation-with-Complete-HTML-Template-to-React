import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Aside from './Aside'

export default function Layout() {
  
    return (
        <>
            <Header />
                <main>
                    <Row className='h-100'>
                        <Col sm={4} className='a_tbdr h-100'>
                            <Aside />
                        </Col>
                        <Col sm={8} className='a_tbdr'>
                            <Outlet />
                        </Col>
                    </Row>
                </main>  
            <Footer />
        </>
    )
}
