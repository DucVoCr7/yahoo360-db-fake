// Account 
table admin {
    id uuid [PK] 
    createAt date
    updateAt date 
    name string 
    email string 
    password string
    phone string 
    phoneId string 
    apartmentId number
    streetId number
    wardId number 
    districtId number 
    provinceId number 
    countryId number
    fullAddress string  
    image string 
    imageId string 
    birthday date 
    gender string 
  } 
  
  table lessor { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    name string 
    email string 
    password string 
    phone string 
    phoneId string 
    apartmentId number
    streetId number
    wardId number 
    districtId number 
    provinceId number 
    countryId number
    fullAddress string  
    image string 
    imageId string 
    birthday date 
    gender string 
  } 
  
  table lessee { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    name string 
    email string 
    password string 
    phone string 
    phoneId string 
    apartmentId number
    streetId number
    wardId number 
    districtId number 
    provinceId number 
    countryId number
    fullAddress string  
    image string 
    imageId string 
    birthday date 
    gender string 
    lat float 
    long float 
  } 
  
  //Facility 
  table hotel { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    lessorId uuid 
    name string 
    email string 
    password string 
    phone string 
    phoneId string 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string 
    apartmentId number
    streetId number
    wardId number 
    districtId number 
    provinceId number 
    countryId number
    fullAddress string  
    lat float 
    long float 
    description text 
    totalRooms number 
    totalRoomsRented number 
  } 
  ref: hotel.lessorId > lessor.id
  
  table motel { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    lessorId uuid 
    name string 
    email string 
    password string 
    phone string 
    phoneId string 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string 
    apartmentId number
    streetId number
    wardId number 
    districtId number 
    provinceId number 
    countryId number
    fullAddress string  
    lat float 
    long float 
    description text 
    totalRooms number 
    totalRoomsRented number 
  } 
  ref: motel.lessorId > lessor.id
  
  
  table resort { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    lessorId uuid 
    name string 
    email string 
    password string 
    phone string 
    phoneId string 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string 
    apartmentId number
    streetId number
    wardId number  
    districtId number  
    provinceId number   
    countryId number
    fullAddress string   
    lat float  
    long float  
    description text   
    totalRooms number  
    totalRoomsRented number 
  } 
  ref: resort.lessorId > lessor.id
  
  
  //Facility room  
  table resortRoom { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    resortId uuid
    resortRoomTypeId uuid    
    roomCode number   
    roomStatus string  
    lesseeId uuid  
    phone string 
    phoneId string 
  }
  ref: resortRoom.resortId > resort.id
  ref: resortRoom.resortRoomTypeId > resortRoomType.id
  ref: resortRoom.lesseeId > lessee.id
  
  table hotelRoom { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    hotelId uuid
    hotelRoomTypeId uuid     
    roomCode number 
    roomStatus string 
    lesseeId uuid 
    phone string 
    phoneId string 
  }
  ref: hotelRoom.hotelId > hotel.id
  ref: hotelRoom.hotelRoomTypeId > hotelRoomType.id
  ref: hotelRoom.lesseeId > lessee.id
  
  table motelRoom { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    motelId uuid
    motelRoomTypeId uuid 
    roomCode number 
    roomStatus string 
    lesseeId uuid 
    phone string 
    phoneId string 
  } 
  ref: motelRoom.motelId > motel.id
  ref: motelRoom.motelRoomTypeId > motelRoomType.id
  ref: motelRoom.lesseeId > lessee.id
  
  //Facility room type 
  table resortRoomType { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    resortId uuid
    name string
    area number
    description text    
    priceNormal number  
    priceWeekend number 
    priceHoliday number 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string
  }
  ref: resortRoomType.resortId > resort.id
  
  table hotelRoomType { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    hotelId uuid
    name string
    area number
    description text  
    priceNormal number 
    priceWeekend number 
    priceHoliday number 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string
  }
  ref: hotelRoomType.hotelId > hotel.id
  
  table motelRoomType { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    motelId uuid
    name string
    area number
    description text 
    priceNormal number 
    priceWeekend number 
    priceHoliday number 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string
  } 
  ref: motelRoomType.motelId > motel.id
  
  // Amenity 
  table facilityAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    name string
    price number 
    description text 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string 
    image5 string 
    image5Id string
  } 
  
  table roomAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    name string
    price number 
    description text 
    image1 string 
    image1Id string 
    image2 string 
    image2Id string 
    image3 string 
    image3Id string 
    image4 string 
    image4Id string
    image5 string 
    image5Id string 
  } 
  
  // Facility - facilityAmenity 
  table hotel_facilityAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    hotelId uuid 
    facilityAmenityId uuid 
  }
  ref: hotel_facilityAmenity.hotelId > hotel.id
  ref: hotel_facilityAmenity.facilityAmenityId > facilityAmenity.id
  
  table motel_facilityAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    motelId uuid 
    facilityAmenityId uuid 
  }
  ref: motel_facilityAmenity.motelId > motel.id
  ref: motel_facilityAmenity.facilityAmenityId > facilityAmenity.id
  
  table resort_facilityAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    resortId uuid 
    facilityAmenityId uuid 
  }
  ref: resort_facilityAmenity.resortId > resort.id
  ref: resort_facilityAmenity.facilityAmenityId > facilityAmenity.id
  
  // Room type - roomAmenity 
  table hotelRoomType_roomAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    hotelRoomTypeId uuid 
    roomAmenityId uuid 
  } 
  ref: hotelRoomType_roomAmenity.hotelRoomTypeId > hotelRoomType.id
  ref: hotelRoomType_roomAmenity.roomAmenityId > roomAmenity.id
  
  table motelRoomType_roomAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    motelRoomTypeId uuid 
    roomAmenityId uuid 
  } 
  ref: motelRoomType_roomAmenity.motelRoomTypeId > motelRoomType.id
  ref: motelRoomType_roomAmenity.roomAmenityId > roomAmenity.id
  
  table resortRoomType_roomAmenity { 
    id uuid [PK] 
    createAt date 
    updateAt date 
    resortRoomTypeId uuid 
    roomAmenityId uuid 
  }
  ref: resortRoomType_roomAmenity.resortRoomTypeId > resortRoomType.id
  ref: resortRoomType_roomAmenity.roomAmenityId > roomAmenity.id
  
  // Address
  table apartment { 
    id uuid [PK] 
    createAt date 
    updateAt date
    streetId uuid
    sortName string
    fullName string
  }
  ref: apartment.streetId > street.id 
  
  table street {
    id uuid [PK] 
    createAt date 
    updateAt date
    wardId uuid
    sortName string
    fullName string
  }
  ref: street.wardId > ward.id
  
  table ward {
    id uuid [PK] 
    createAt date 
    updateAt date
    districtId uuid
    sortName string
    fullName string
  }
  ref: ward.districtId > district.id
  
  table district {
    id uuid [PK] 
    createAt date 
    updateAt date
    provinceId uuid
    sortName string
    fullName string
  }
  ref: district.provinceId > province.id
  
  table province {
    id uuid [PK] 
    createAt date 
    updateAt date
    countryId uuid
    sortName string
    fullName string
  }
  ref: province.countryId > country.id
  
  table country {
    id uuid [PK] 
    createAt date 
    updateAt date
    name string
    phoneId string
  }

  // RefreshToken 
  table refreshToken { 
    id uuid [PK]
    createAt date 
    updateAt date 
    refreshToken string 
    accountId uuid 
  }
  ref: refreshToken.accountId > lessee.id
  ref: refreshToken.accountId > lessor.id
  ref: refreshToken.accountId > admin.id
  
  
  
  
  
  
  