import React from "react";
import ReactDOM from "react-dom";
import Logo from "./foodlogo.jpg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo} alt="" />
      </div>
      <div className="nav-items">
        <p>Home</p>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Cart</p>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "831065",
      name: "Chinese Wok",
      cloudinaryImageId: "f996b31033fd07603bfb28cb4e526683",
      locality: "Kaccha Bagh Area",
      areaName: "Omaxe mall",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.5,
      parentId: "61955",
      avgRatingString: "4.5",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 22:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹179" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/chinese-wok-kaccha-bagh-area-omaxe-mall-delhi-831065",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "804071",
      name: "Pizza Hut",
      cloudinaryImageId: "490629b70f89da8a5b93fc199ece335e",
      locality: "H.C. Sen Marg",
      areaName: "Omaxe ChandniChowk",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "721",
      avgRatingString: "4.0",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 49,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 22:59:00", opened: true },
      badges: {
        imageBadges: [
          { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹90" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-h-c-sen-marg-omaxe-chandnichowk-delhi-804071",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "286518",
      name: "UBQ by Barbeque Nation",
      cloudinaryImageId: "ru7j7x8qqtvuzfuw7cdh",
      locality: "Janpath",
      areaName: "Janpath",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "10804",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 16:30:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹90" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-janpath-delhi-286518",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "302684",
      name: "Barbeque Nation",
      cloudinaryImageId: "v4ryntwbvxuogbwfg3kj",
      locality: "Connaught Place",
      areaName: "Connaught Place",
      costForTwo: "₹600 for two",
      cuisines: [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts",
      ],
      avgRating: 4.1,
      parentId: "2438",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 38,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 16:30:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹90" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/barbeque-nation-connaught-place-delhi-302684",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "839278",
      name: "Punjabi Rasoi",
      cloudinaryImageId: "e688788282fcb6a6ffe6918913385ecd",
      locality: "SHAKAR PUR BRAMAD",
      areaName: "BABAR PUR",
      costForTwo: "₹200 for two",
      cuisines: ["Indian"],
      parentId: "1270",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 7.8,
        serviceability: "SERVICEABLE",
        slaString: "60-65 mins",
        lastMileTravelString: "7.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 20:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "60% OFF", discountTag: "FLAT DEAL" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/punjabi-rasoi-shakar-pur-bramad-babar-pur-delhi-839278",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "804724",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/5398a8f0-14f4-4df3-8a9d-ac4d271e955f_804724.JPG",
      locality: "Kaccha Bagh",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "10+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.4,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 23:00:00", opened: true },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹179" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-kaccha-bagh-chandni-chowk-delhi-804724",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "253765",
      name: "McDonald's",
      cloudinaryImageId: "535fc9f9c135f7982317bbb6a64a1ffc",
      locality: "Kumar Theatre",
      areaName: "Chandni Chowk",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 23:58:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "30% OFF", subHeader: "UPTO ₹75" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-kumar-theatre-chandni-chowk-delhi-253765",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "807783",
      name: "Burger King",
      cloudinaryImageId: "533d5ee221cb729dcf42faeb8761f57d",
      locality: "Omaxe Mall",
      areaName: "Chandni Chowk",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 3.7,
      parentId: "166",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-25 23:00:00", opened: true },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: { imageBased: {}, textBased: {}, textExtendedBadges: {} },
      },
      aggregatedDiscountInfoV3: { header: "50% OFF", subHeader: "UPTO ₹90" },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-omaxe-mall-chandni-chowk-delhi-807783",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "38925",
      name: "Domino's Pizza",
      cloudinaryImageId: "d0450ce1a6ba19ea60cd724471ed54a8",
      locality: "Netaji Subhash Marg",
      areaName: "Daryaganj",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2024-04-26 01:55:00", opened: true },
      badges: {
        imageBadges: [
          { imageId: "Rxawards/_CATEGORY-Pizza.png", description: "Delivery!" },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹150 OFF",
        subHeader: "ABOVE ₹299",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: { context: "seo-data-5cb2d884-3328-4b28-9c79-83c4b511600c" },
    cta: {
      link: "https://www.swiggy.com/restaurants/dominos-pizza-netaji-subhash-marg-daryaganj-delhi-38925",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
    props.resData?.info;
  const { deliveryTime } = props.resData.info.sla;

  return (
    <div className="restaurant-card">
      <div className="restaurant-image-container">
        <img
          className="restaurant-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt=""
        />
      </div>
      <div className="restaurant-details">
        <h2 className="restaurant-name" style={{marginBottom: "5px"}}>{name}</h2>
        <h4>{cuisines.join(", ")}</h4>
        <div style={{ display: "flex", marginTop: "10px" }}>
          <h4>{avgRating?avgRating+" stars":"NEW"}</h4>
          <p style={{ padding: "0 10px" }}>•</p>
          <h4>{deliveryTime} mins</h4>
          <p style={{ padding: "0 10px" }}>•</p>
          <h4>{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input className="search-bar" type="text" />
        <p className="search-button">Search</p>
      </div>

      <div className="restaurant-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
