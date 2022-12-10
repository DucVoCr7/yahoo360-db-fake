const { DataTypes } = require('sequelize');

// Default allowNull: true
const id_createdAt_updatedAt = (length = 36) => {
  return {
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.CHAR(length),
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  };
};

const id_createdAt_updatedAt_image = () => {
  return {
    imageId: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  };
};

// Infomation person
const name_email_password = (isLessee = false) => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING(120),
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(100),
    },
    password: {
      allowNull: isLessee,
      type: DataTypes.STRING,
    },
  };
};

const birthday_gender = () => {
  return {
    birthday: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.STRING(6),
    },
  };
};

const phone_phoneId = (isLessee = false) => {
  return {
    phone: {
      unique: true,
      allowNull: isLessee,
      type: DataTypes.STRING(12),
    },
    phoneId: {
      allowNull: isLessee,
      type: DataTypes.STRING(6),
    },
  };
};

// Address
const addressFull = (isUser = false) => {
  return {
    apartmentId: {
      allowNull: isUser,
      type: DataTypes.CHAR(36),
    },
    streetId: {
      allowNull: isUser,
      type: DataTypes.CHAR(36),
    },
    wardId: {
      allowNull: isUser,
      type: DataTypes.CHAR(5),
    },
    districtId: {
      allowNull: isUser,
      type: DataTypes.CHAR(3),
    },
    provinceId: {
      allowNull: isUser,
      type: DataTypes.CHAR(2),
    },
    countryId: {
      allowNull: isUser,
      type: DataTypes.CHAR(3),
    },
    fullAddress: {
      allowNull: isUser,
      type: DataTypes.TEXT,
    },
  };
};

const lat_long = () => {
  return {
    lat: {
      type: DataTypes.FLOAT,
    },
    long: {
      type: DataTypes.FLOAT,
    },
  };
};

const address_name = (length = 255) => {
  return {
    sortName: {
      allowNull: false,
      type: DataTypes.STRING(length),
    },
    fullName: {
      allowNull: false,
      type: DataTypes.STRING(length),
    },
  };
};

// Image
const image_user = () => {
  return {
    image: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    imageId: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  };
};

// Facility
const facility = () => {
  return {
    lessorId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
    },
    totalRooms: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'Tổng số phòng',
    },
    totalRoomsRented: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'Tổng số phòng đã cho thuê',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  };
};

// Room - Phòng
const room = () => {
  return {
    roomCode: {
      allowNull: false,
      type: DataTypes.SMALLINT.UNSIGNED,
      comment: 'Mã số của phòng',
    },
    roomStatus: {
      allowNull: false,
      type: DataTypes.STRING(50),
      comment: 'Trạng thái của phòng',
    },
  };
};

const name_area_description_roomType = () => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    area: {
      allowNull: false,
      type: DataTypes.INTEGER(3).UNSIGNED,
      comment: 'Diện tích (m2)',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  };
};

const price = () => {
  return {
    priceNormal: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Giá ngày thường (VND)',
    },
    priceWeekend: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Giá cuối tuần (VND)',
    },
    priceHoliday: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Giá ngày lễ (VND)',
    },
  };
};

// Amenity - Tiện ích
const name_price_description_amenity = () => {
  return {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      comment: 'Đơn vị (VND)',
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  };
};

const status_level = () => {
  return {
    status: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0,
      comment: 'Trạng thái của đối tượng (0 - Hoạt động, 1 - Không hoạt động, 2 - Khoá)',
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING(20),
      defaultValue: 'normal',
      comment: 'Phân hạng, phân quyền, phân loại',
    },
  };
};

const userId_userType = () => {
  return {
    userId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
      comment: 'Id của admin || lessor || lessee',
    },
    userType: {
      allowNull: false,
      type: DataTypes.TINYINT,
      comment: 'Xét loại cơ sở 0: lessee || 1: lessor || 2: admin',
    },
  };
};

const facilityId_facilityType = () => {
  return {
    facilityId: {
      allowNull: false,
      type: DataTypes.CHAR(36),
      comment: 'Id của model || hotel || resort',
    },
    facilityType: {
      allowNull: false,
      type: DataTypes.TINYINT,
      comment: 'Xét loại cơ sở 0: model || 1: hotel || 2: resort',
    },
  };
};

const content_status = () => {
  return {
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    status: {
      allowNull: false,
      type: DataTypes.TINYINT,
      defaultValue: 0,
      comment: 'Trạng thái của đối tượng (0 - hiện, 1 - khoá)',
    },
  };
};
module.exports = {
  id_createdAt_updatedAt_image,
  content_status,
  userId_userType,
  facilityId_facilityType,
  status_level,
  id_createdAt_updatedAt,
  name_email_password,
  phone_phoneId,
  addressFull,
  image_user,
  birthday_gender,
  lat_long,
  facility,
  address_name,
  price,
  room,
  name_area_description_roomType,
  name_price_description_amenity,
};
