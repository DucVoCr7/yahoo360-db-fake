// Default allowNull: true
const id_createdAt_updatedAt = (Sequelize, stringNumber = 36) => {
  return {
    id: {
      primaryKey: true,
      type: Sequelize.CHAR(stringNumber),
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  };
};

const name_email_password = (Sequelize, isLessee = false) => {
  return {
    name: {
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    email: {
      unique: true,
      allowNull: false,
      type: Sequelize.STRING(100),
    },
    password: {
      allowNull: isLessee,
      type: Sequelize.STRING,
    },
  };
};

const phone_phoneId = (Sequelize, isLessee = false) => {
  return {
    phone: {
      unique: true,
      allowNull: isLessee,
      type: Sequelize.STRING(12),
    },
    phoneId: {
      allowNull: isLessee,
      type: Sequelize.STRING(6),
    },
  };
};

const addressFull = (Sequelize, isUser = false) => {
  return {
    apartmentId: {
      allowNull: isUser,
      type: Sequelize.CHAR(36),
    },
    streetId: {
      allowNull: isUser,
      type: Sequelize.CHAR(36),
    },
    wardId: {
      allowNull: isUser,
      type: Sequelize.CHAR(5),
    },
    districtId: {
      allowNull: isUser,
      type: Sequelize.CHAR(3),
    },
    provinceId: {
      allowNull: isUser,
      type: Sequelize.CHAR(2),
    },
    countryId: {
      allowNull: isUser,
      type: Sequelize.CHAR(3),
    },
    fullAddress: {
      allowNull: isUser,
      type: Sequelize.TEXT,
    },
  };
};

const image = (Sequelize) => {
  return {
    image: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    imageId: {
      type: Sequelize.STRING,
    },
  };
};

const birthday_gender = (Sequelize) => {
  return {
    birthday: {
      type: Sequelize.DATEONLY,
    },
    gender: {
      type: Sequelize.STRING(6),
    },
  };
};

const lat_long = (Sequelize) => {
  return {
    lat: {
      type: Sequelize.FLOAT,
    },
    long: {
      type: Sequelize.FLOAT,
    },
  };
};

const image5 = (Sequelize) => {
  return {
    image1: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image1Id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image2: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image2Id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image3: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image3Id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image4: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image4Id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image5: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    image5Id: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  };
};

const facility = (Sequelize) => {
  return {
    lessorId: {
      allowNull: false,
      type: Sequelize.CHAR(36),
    },
    totalRooms: {
      allowNull: false,
      type: Sequelize.SMALLINT.UNSIGNED,
      comment: 'Tổng số phòng',
    },
    totalRoomsRented: {
      allowNull: false,
      type: Sequelize.SMALLINT.UNSIGNED,
      comment: 'Tổng số phòng đã cho thuê',
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  };
};

const address_name = (Sequelize, stringNumber) => {
  return {
    sortName: {
      allowNull: false,
      type: Sequelize.STRING(stringNumber),
    },
    fullName: {
      allowNull: false,
      type: Sequelize.STRING(stringNumber),
    },
  };
};

const price = (Sequelize) => {
  return {
    priceNormal: {
      allowNull: false,
      type: Sequelize.INTEGER,
      comment: 'Giá ngày thường',
    },
    priceWeekend: {
      allowNull: false,
      type: Sequelize.INTEGER,
      comment: 'Giá cuối tuần',
    },
    priceHoliday: {
      allowNull: false,
      type: Sequelize.INTEGER,
      comment: 'Giá ngày lễ',
    },
  };
};

const room = (Sequelize) => {
  return {
    roomCode: {
      allowNull: false,
      type: Sequelize.SMALLINT.UNSIGNED,
      comment: 'Mã số của phòng',
    },
    roomStatus: {
      allowNull: false,
      type: Sequelize.STRING(50),
      comment: 'Trạng thái của phòng',
    },
    lesseeId: {
      type: Sequelize.STRING(50),
    },
  };
};

const name_area_description_roomType = (Sequelize) => {
  return {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    area: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  };
};

const name_price_description_amenity = (Sequelize) => {
  return {
    name: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    price: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    description: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
  };
};

module.exports = {
  id_createdAt_updatedAt,
  name_email_password,
  phone_phoneId,
  addressFull,
  image,
  birthday_gender,
  lat_long,
  image5,
  facility,
  address_name,
  price,
  room,
  name_area_description_roomType,
  name_price_description_amenity,
};
