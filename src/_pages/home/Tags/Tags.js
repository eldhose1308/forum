import React from "react";

import Post from '_modules/posts/_components/Post';
import { TabItem, Tabs } from '_components/UI/Tabs/Tabs';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItemGroup, DropdownMenuTrigger } from "_components/UI/Dropdown/Dropdown";
import Flex from "_components/Misc/Flex/Flex";
import Separator from "_components/Misc/Separator/Separator";
import TagGroup from "_modules/tags/_components/TagGroup";

const Tags = () => {

    return (
        <React.Fragment>
            <Flex direction='column' alignItems='none' justifyContent='none' width='none' className='posts-filters bg-default border-b border-another sticky top-0'>

                <Tabs>
                    <TabItem isActive={true} onClick={() => { alert('show posts...') }} >Following Tags</TabItem>
                    <TabItem>Suggested Tags</TabItem>
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



            <TagGroup />


        </React.Fragment>
    )
}

export default Tags