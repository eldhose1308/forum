import React from "react";

import Post from '_modules/posts/_components/Post';
import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItemGroup, DropdownMenuTrigger } from "_components/UI/Dropdown/Dropdown";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import Avatar from "_components/UI/Avatar/Avatar";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";

const Popular = (props) => {
    const postArr = "1234567890".split("");

    return (
        <React.Fragment>
            <Flex alignItems='none' justifyContent='spaceBetween'>

                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='grow-2'>

                    <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                        <Tabs>
                            <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Popluar Users</TabItem>
                            <TabItem>Popluar Communities</TabItem>
                            <TabItem>Popluar Posts</TabItem>
                            <TabItem>Popluar Tags</TabItem>
                        </Tabs>


                        <Separator className='my-2' />

                        <Flex justifyContent='none'>

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className="flex items-center cursor-pointer hover-custom rounded-md">
                                        <span className="mx-2 my-2 text-sm">
                                            Sort by
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItemGroup
                                        options={[{ id: 'latest', text: 'Latest' }, { id: 'oldest', text: 'Oldest' }, { id: 'most_viewed', text: 'Most Viewed' }]}
                                        onChange={(value) => alert(value)}
                                    />
                                </DropdownMenuContent>
                            </DropdownMenu>

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <div className="flex items-center cursor-pointer hover-custom rounded-md">
                                        <span className="mx-2 my-2 text-sm">
                                            Latest
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItemGroup
                                        options={[{ id: 'latest', text: 'Latest' }, { id: 'oldest', text: 'Oldest' }, { id: 'most_viewed', text: 'Most Viewed' }]}
                                        onChange={(value) => alert(value)}
                                    />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </Flex>

                    </Flex>

                    <div className="flex">
                        <div className='w-full px-3 mr-3'>
                            {postArr.map((item, index) => (<Post key={index} />)
                            )}
                        </div>
                    </div>

                </Flex>
                <Flex direction='column' alignItems='none' justifyContent='spaceBetween' width='none' className='min-w-md max-w-md h-full sticky top-0'>

                    <Card border='ghost' className='mx-3'>
                        <CardTitle>
                            <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                                <Typography size='lg'>
                                    Suggested Communities
                                </Typography>
                            </Flex>
                        </CardTitle>
                        <CardContent>
                            <Flex>
                                <Flex justifyContent='spaceBetween' className='py-2'>
                                    <div class="flex mb-2 items-center">

                                        <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                                        <div class="flex flex-col">
                                            <h3 class="text-default px-3 text-sm">Javascript</h3>
                                            <p class="text-secondary px-3 space-y-1 text-xs">255 members</p>
                                        </div>
                                    </div>

                                    <div class="flex mb-2">
                                        <Button variant='custom' size='xs'>
                                            <div className="flex pr-2 py-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                            </div>
                                            <span className="text-xs">
                                                Join
                                            </span>
                                        </Button>
                                    </div>
                                </Flex>
                                <Flex justifyContent='spaceBetween' className='py-2'>
                                    <div class="flex mb-2 items-center">

                                        <Avatar size='xs' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&amp;usqp=CAU" />

                                        <div class="flex flex-col">
                                            <h3 class="text-default px-3 text-sm">Angular</h3>
                                            <p class="text-secondary px-3 space-y-1 text-xs">1k members</p>
                                        </div>
                                    </div>

                                    <div class="flex mb-2">
                                        <Button variant='custom' size='xs'>
                                            <div className="flex pr-2 py-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>
                                            </div>
                                            <span className="text-xs">
                                                Join
                                            </span>
                                        </Button>
                                    </div>
                                </Flex>
                            </Flex>

                        </CardContent>
                        <CardFooter>
                            <Flex>
                                <Button size='xs' width='none' variant='ghost' className='border border-secondary hover-border-custom'>See more</Button>
                            </Flex>
                        </CardFooter>
                    </Card>

                    <Separator />

                    <Card border='ghost' className='mx-3'>
                        <CardTitle>
                            <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                                <Typography size='lg'>
                                    Something else
                                </Typography>
                            </Flex>

                        </CardTitle>
                        <CardContent>
                        </CardContent>
                        <CardFooter></CardFooter>
                    </Card>

                </Flex>
            </Flex>
            {/* <div className="sidebar p-3 text-default w-80 grow-1 overflow-scroll h-screen sm:hidden md:hidden lg:display"> This is sidebar </div> */}
            {/* </div> */}

        </React.Fragment>
    )
}

export default Popular