import { Flex, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React, { Fragment } from "react";

const FeaturedFictionSkeleton = () => {
	return (
		<Fragment>
			<Skeleton w={"full"} h={"40px"} />
			<Skeleton w={"40%"} h={"20px"} />
			<SkeletonText noOfLines={9} />
			<Flex justify={"space-between"}>
				<Skeleton w={"30%"} h={"5px"} />
				<Flex gap={4}>
					<SkeletonCircle size={"8"} />
					<SkeletonCircle size={"8"} />
					<SkeletonCircle size={"8"} />
				</Flex>
			</Flex>
		</Fragment>
	);
};

export default FeaturedFictionSkeleton;
