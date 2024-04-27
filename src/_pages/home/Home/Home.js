import React, { useEffect } from 'react'


import Post from '_modules/posts/_components/Post';
import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import Avatar from "_components/UI/Avatar/Avatar";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import ResponsiveDrawer from '_components/UI/Drawer/ResponsiveDrawer';

import { FilterSort, FilterViews } from "_modules/filters/_components";
import MiniCommunityList from '_modules/communities/_components/MiniCommunityList';
// import useDrawer from '_hooks/useDrawer';

const Home = () => {
    // const { isDrawerOpen, closeDrawer, openDrawer } = useDrawer()

    const postArr = "1234567890".split("");


    // useEffect(() => {

    //     const handleResize = () => {
    //         const widthToCheck = 1012;
    //         const currentWidth = window.innerWidth;


    //         if (!isDrawerOpen && currentWidth <= widthToCheck) {
    //             openDrawer()
    //         } else {
    //             closeDrawer()
    //         }
    //     };

    //     handleResize();
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <React.Fragment>
            <Flex alignItems='none' justifyContent='spaceBetween'>

                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='grow-2'>

                    <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                        <Tabs hasNav>
                            <TabItem isActive={true} onClick={() => { }} >All</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                            <TabItem>Frequently</TabItem>
                            <TabItem>Visited</TabItem>
                            <TabItem>Tags</TabItem>
                            <TabItem>here</TabItem>
                        </Tabs>

                        <Separator className='my-2' />

                        <Flex justifyContent='none'>

                            <FilterSort
                                onSelect={() => { }}
                            />


                            <FilterViews
                            />
                        </Flex>

                    </Flex>

                    <div className="flex">
                        <div className='w-full px-3 mr-3'>
                            {postArr.map((item, index) => (<Post key={index} />)
                            )}
                        </div>
                    </div>

                </Flex>




                <ResponsiveDrawer>

                    <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-md max-w-md h-full sticky top-0'>

                        <MiniCommunityList />

                        <Separator />

                        <Card border='ghost' className='mx-3'>
                            <CardTitle>
                                <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                                    <Typography size='lg'>
                                        Users
                                    </Typography>
                                </Flex>

                            </CardTitle>
                            <CardContent>
                            </CardContent>
                            <CardFooter></CardFooter>
                        </Card>

                    </Flex>
                </ResponsiveDrawer>

            </Flex>


        </React.Fragment>
    )
}

export default Home