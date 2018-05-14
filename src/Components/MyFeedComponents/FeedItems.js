import React from 'react';
import { CardItem } from './CardItem';
import { AdvertCard } from './AdvertCard';
import { GroupCard } from './GroupCard';

const FeedItems = () => {
	return (   
        <div className="card-columns">
            <CardItem
                cardType="blog-post" 
                heading="blog"
                headingCategory="technology"
                imageSrc="img/camera.png"
                imageAlt="EVO Camera"
                title="How to take the best pictures at your practice"
                text="There isn’t always time (or money!) to get a professional photographer to take photos for you so we’ve put together a list of tips &amp; tricks."
                tags={["Practice MGMT", "Procurement"]}
                meta={{ date:"March 14, 2018", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <AdvertCard 
                imageSrc="img/cropped-leventhal-dental-supplies.png"
                imageAlt="Dentist's chair"
                title="PATIENTS LOVE OUR CHAIRS ALMOST AS MUCH AS DENTISTS"
                promoImageSrc="img/delta-dental.png"
            />

            <CardItem
                cardType="blog-post" 
                heading="blog"
                headingCategory="practice management"
                imageSrc="img/dental-work.png"
                imageAlt="Young male patient undergoing dental work"
                title="This is another article about practice management"
                text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The truth is the universe is constantly..."
                meta={{ date:"March 14, 2018", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <CardItem
                cardType="post"
                title="Who manages the supplies and ordering at your practice?"
                text="For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…"
                tags={["Practice MGMT", "Procurement"]}
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <CardItem
                cardType="post"
                title="Who manages the supplies and ordering at your practice?"
                text="For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…"
                tags={["Practice MGMT", "Procurement"]}
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />
            
            <CardItem
                cardType="img-post" 
                imageSrc="img/dental-xray.png"
                imageAlt="xray of teeth"
                tags={["Crowns", "Fillings"]}
                medallion={2}
                title="Typical Fracture Necrosis lorem ipsum this is a max length title"
                text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The truth is the universe is constantly..."
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <CardItem
                cardType="post"
                title="Who manages the supplies and ordering at your practice?"
                text="For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…"
                tags={["Practice MGMT", "Procurement"]}
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <CardItem
                cardType="post"
                title="Who manages the supplies and ordering at your practice?"
                text="For pens and stationary and stuff like that, I typically don’t need to be involved in ordering or pricing discussions, but I’m finding that my…"
                tags={["Practice MGMT", "Procurement"]}
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <CardItem
                cardType="img-post" 
                imageSrc="img/dental-xray.png"
                imageAlt="xray of teeth"
                tags={["Crowns", "Fillings"]}
                medallion={2}
                title="Typical Fracture Necrosis lorem ipsum this is a max length title"
                text="There is a lot of exciting stuff going on in the stars above us that makes astronomy so much fun. The truth is the universe is constantly..."
                meta={{ date:"17 Minutes Ago", likes:275, replies:12, shares:12 }}
                author={{ name:"Dr. Bob Abborford, DMD", user:"DR. YANKEM", location:"Baltimore, MD", imageSrc:"./img/bob.png" }}
            />

            <GroupCard
                groupTitle="Private Group"
                title="Dentshine Staff Members"
                members="147 Members"
                imageSrc="img/dentshine.png"
                imageAlt="Dentshine group logo"
            >
                There are <a href="#">3 new conversations</a> to catch up on.
            </GroupCard>

        </div>
	);
};

export { FeedItems };
