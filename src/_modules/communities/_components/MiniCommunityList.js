import React, { useState, useEffect } from "react";

import Flex from "_components/Misc/Flex/Flex";
import { Card, CardContent, CardFooter, CardTitle } from "_components/Misc/Card/Card";
import Typography from "_components/Misc/Typography/Typography";
import { Button } from "_components/Form";
import MiniCommunityCard from "./MiniCommunityCard";

import * as communityModel from "_services/communities.service";
import { filters } from "../_utils/communityFilter";
import useLoading from "_hooks/useLoading";

const MiniCommunityList = (props) => {
    const { filter = 'RANDOM' } = props;

    const { type, title } = filters[filter] || {}


    const [communities, setCommunities] = useState([])
    const { isLoading, setIsLoading, Loader } = useLoading()

    useEffect(() => {
        const fetchCommunities = async () => {
            setIsLoading(true)
            try {
                const communityList = await communityModel.getAllCommunities({type})
                setCommunities(communityList)
            } catch (err) {

            } finally {
                setIsLoading(false)
            }
        }


        fetchCommunities()
    }, [])

    return (
        <Card border='ghost' className='mx-3'>
            <CardTitle>
                <Flex justifyContent='spaceBetween' className='px-3 m-3'>
                    <Typography size='lg'>
                        {title}
                    </Typography>
                </Flex>
            </CardTitle>
            <CardContent>
                <Flex>

                    {isLoading ? (
                        <Loader />
                    ) : (
                        communities.map(community => {
                            return (<MiniCommunityCard />)
                        })
                    )}

                </Flex>

            </CardContent>
            <CardFooter>
                <Flex>
                    <Button size='xs' width='none' variant='ghost' className='border border-secondary hover-border-custom'>See more</Button>
                </Flex>
            </CardFooter>
        </Card>
    )
}

export default MiniCommunityList