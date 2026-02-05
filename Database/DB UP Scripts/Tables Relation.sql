

--ALTER TABLE [dbo].[tbl_City] ADD CONSTRAINT [FK_tb_City_tb_State] FOREIGN KEY ([StateId]) REFERENCES [dbo].[tbl_State] ([StateId])
--GO

--ALTER TABLE [dbo].[tbl_State] ADD CONSTRAINT [FK_tb_State_tb_Country] FOREIGN KEY ([CountryId]) REFERENCES [dbo].[tbl_Country] ([CountryId])
--GO

--ALTER TABLE [dbo].[tbl_ClientWallet] ADD CONSTRAINT [FK_tb_ClientWallet_tb_Payment] FOREIGN KEY ([PaymentId]) REFERENCES [dbo].[tbl_Payment] ([PaymentId])
--GO


--ALTER TABLE [dbo].[tbl_ClientWallet] ADD CONSTRAINT [FK_tb_ClientWallet_tb_Payment] FOREIGN KEY ([PaymentId]) REFERENCES [dbo].[tbl_Payment] ([PaymentId])
--GO


--ALTER TABLE [dbo].[tbl_ClientWallet] ADD CONSTRAINT [FK_tb_ClientWallet_tb_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_EventBooking] ADD CONSTRAINT [FK_tb_EventBooking_tb_Payment] FOREIGN KEY ([PaymentId]) REFERENCES [dbo].[tbl_Payment] ([PaymentId])
--GO

--ALTER TABLE [dbo].[tbl_EventBooking] ADD CONSTRAINT [FK_tb_EventBooking_tb_ClientWallet] FOREIGN KEY ([ClientWalletEntryId]) REFERENCES [dbo].[tbl_ClientWallet] ([ClientWalletEntryId])
--GO

--ALTER TABLE [dbo].[tbl_EventBooking] ADD CONSTRAINT [FK_tb_EventBooking_tb_EventStatus] FOREIGN KEY ([EventStatusId]) REFERENCES [dbo].[tbl_EventStatus] ([EventStatusId])
--GO


--ALTER TABLE [dbo].[tbl_EventBooking] ADD CONSTRAINT [FK_tb_EventBookingCreatedBy_tb_User] FOREIGN KEY ([CreatedBy]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_EventBooking] ADD CONSTRAINT [FK_tb_EventBookingModifiedBy_tb_User] FOREIGN KEY ([ModifiedBy]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_MMEEOffer] ADD CONSTRAINT [FK_tbl_MMEEOffer_tb_MMEEOfferType] FOREIGN KEY ([MMEEOfferTypeId]) REFERENCES [dbo].[tbl_MMEEOfferType] ([MMEEOfferTypeId])
--GO

--ALTER TABLE [dbo].[tbl_MMEEOffer] ADD CONSTRAINT [FK_tbl_MMEEOffer_tb_VendorService] FOREIGN KEY ([VendorServiceId]) REFERENCES [dbo].[tbl_VendorService] ([VendorServiceId])
--GO

--ALTER TABLE [dbo].[tbl_Payment] ADD CONSTRAINT [FK_tbl_Payment_tb_PaymentMethod] FOREIGN KEY (PaymentMethodId) REFERENCES [dbo].[tbl_PaymentMethod] ([PaymentMethodId])
--GO

--ALTER TABLE [dbo].[tbl_Payment] ADD CONSTRAINT [FK_tbl_Payment_tb_User] FOREIGN KEY (PaymentByUserId) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_Payment] ADD CONSTRAINT [FK_tbl_Payment_tb_PaymentStatus] FOREIGN KEY (PaymentStatusId) REFERENCES [dbo].[tbl_PaymentStatus] ([PaymentStatusId])
--GO

--ALTER TABLE [dbo].[tbl_ServiceProviderRoaster] ADD CONSTRAINT [FK_tbl_ServiceProviderRoaster_tb_TimeSlot] FOREIGN KEY (TimeSlotId) REFERENCES [dbo].[tbl_TimeSlot] ([TimeSlotId])
--GO

--ALTER TABLE [dbo].[tbl_ServiceProviderRoaster] ADD CONSTRAINT [FK_tbl_ServiceProviderRoaster_tb_VendorService] FOREIGN KEY ([VendorServiceId]) REFERENCES [dbo].[tbl_VendorService] ([VendorServiceId])
--GO

--ALTER TABLE [dbo].[tbl_User] ADD CONSTRAINT [FK_tbl_User_tb_UserType] FOREIGN KEY ([UserTypeId]) REFERENCES [dbo].[tbl_UserType] ([UserTypeId])
--GO

--ALTER TABLE [dbo].[tbl_User] ADD CONSTRAINT [FK_tbl_User_tb_UserStatus] FOREIGN KEY ([UserStatusId]) REFERENCES [dbo].[tbl_UserStatus] ([UserStatusId])
--GO

--ALTER TABLE [dbo].[tbl_User] ADD CONSTRAINT [FK_tbl_User_tb_UserAddress] FOREIGN KEY ([UserAddressId]) REFERENCES [dbo].[tbl_UserAddress] ([UserAddressId])
--GO


--ALTER TABLE [dbo].[tbl_UserAddress] ADD CONSTRAINT [FK_tbl_UserAddress_tb_UserAddressType] FOREIGN KEY ([UserAddressTypeId]) REFERENCES [dbo].[tbl_UserAddressType] ([UserAddressTypeId])
--GO

--ALTER TABLE [dbo].[tbl_UserAddress] ADD CONSTRAINT [FK_tbl_UserAddress_tb_Country] FOREIGN KEY ([CountryId]) REFERENCES [dbo].[tbl_Country] ([CountryId])
--GO

--ALTER TABLE [dbo].[tbl_UserAddress] ADD CONSTRAINT [FK_tbl_UserAddress_tb_State] FOREIGN KEY ([StateId]) REFERENCES [dbo].[tbl_State] ([StateId])
--GO

--ALTER TABLE [dbo].[tbl_UserAddress] ADD CONSTRAINT [FK_tbl_UserAddress_tb_City] FOREIGN KEY ([CityId]) REFERENCES [dbo].[tbl_City] ([CityId])
--GO

--ALTER TABLE [dbo].[tbl_UserAspiredLocation] ADD CONSTRAINT [FK_tbl_UserAspiredLocation_tb_Country] FOREIGN KEY ([CountryId]) REFERENCES [dbo].[tbl_Country] ([CountryId])
--GO

--ALTER TABLE [dbo].[tbl_UserAspiredLocation] ADD CONSTRAINT [FK_tbl_UserAspiredLocation_tb_State] FOREIGN KEY ([StateId]) REFERENCES [dbo].[tbl_State] ([StateId])
--GO

--ALTER TABLE [dbo].[tbl_UserAspiredLocation] ADD CONSTRAINT [FK_tbl_UserAspiredLocation_tb_City] FOREIGN KEY ([CityId]) REFERENCES [dbo].[tbl_City] ([CityId])
--GO

--ALTER TABLE [dbo].[tbl_UserCredential] ADD CONSTRAINT [FK_tbl_UserCredential_tb_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_UserLoginInfo] ADD CONSTRAINT [FK_tbl_UserLoginInfo_tb_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_UserLoginInfo] ADD CONSTRAINT [FK_tbl_UserLoginInfo_tb_LoginByType] FOREIGN KEY ([LoginByTypeId]) REFERENCES [dbo].[tbl_LoginByType] ([LoginByTypeId])
--GO

--ALTER TABLE [dbo].[tbl_UserLoginInfo] ADD CONSTRAINT [FK_tbl_UserLoginInfo_tb_UserType] FOREIGN KEY ([LoginUserType]) REFERENCES [dbo].[tbl_UserType] ([UserTypeId])
--GO

--ALTER TABLE [dbo].[tbl_UserReview] ADD CONSTRAINT [FK_tbl_UserReview_tb_User] FOREIGN KEY ([UserId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_UserTestimonial] ADD CONSTRAINT [FK_tbl_Testimonial_tb_User] FOREIGN KEY ([UserWishListId]) REFERENCES [dbo].[tbl_UserWishList] ([UserWishListId])
--GO

--ALTER TABLE [dbo].[tbl_UserWishList] ADD CONSTRAINT [FK_tbl_UserWishList_tb_User] FOREIGN KEY ([WisherUserId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_UserWishList] ADD CONSTRAINT [FK_tbl_UserWishList_tb_UserAspiredLocation] FOREIGN KEY ([UserAspiredLocationId]) REFERENCES [dbo].[tbl_UserAspiredLocation] ([UserAspiredLocationId])
--GO

--ALTER TABLE [dbo].[tbl_UserWishList] ADD CONSTRAINT [FK_tbl_UserWishList_tb_VendorService] FOREIGN KEY ([VendorServiceId]) REFERENCES [dbo].[tbl_VendorService] ([VendorServiceId])
--GO

--ALTER TABLE [dbo].[tbl_VendorService] ADD CONSTRAINT [FK_tbl_VendorService_tb_VendorId] FOREIGN KEY ([VendorId]) REFERENCES [dbo].[tbl_Vendor] ([VendorId])
--GO

--ALTER TABLE [dbo].[tbl_VendorService] ADD CONSTRAINT [FK_tbl_VendorService_tb_EventType] FOREIGN KEY ([EventTypeId]) REFERENCES [dbo].[tbl_EventType] ([EventTypeId])
--GO

--ALTER TABLE [dbo].[tbl_VendorServiceCharge] ADD CONSTRAINT [FK_tbl_VendorServiceCharge_tb_VendorService] FOREIGN KEY ([VendorServiceId]) REFERENCES [dbo].[tbl_VendorService] ([VendorServiceId])
--GO

--ALTER TABLE [dbo].[tbl_VendorService] ADD CONSTRAINT [FK_tbl_VendorService_tb_Vendor] FOREIGN KEY ([VendorId]) REFERENCES [dbo].[tbl_Vendor] ([VendorId])
--GO

--ALTER TABLE [dbo].[tbl_VendorServiceReview] ADD CONSTRAINT [FK_tbl_VendorServiceReview_tb_UserWishList] FOREIGN KEY ([WishListId]) REFERENCES [dbo].[tbl_UserWishList] ([UserWishListId])
--GO

--ALTER TABLE [dbo].[tbl_VendorServiceReview] ADD CONSTRAINT [FK_tbl_VendorServiceReview_tb_EventBooking] FOREIGN KEY ([EventBookingId]) REFERENCES [dbo].[tbl_EventBooking] ([EventBookingId])
--GO

--ALTER TABLE [dbo].[tbl_VendorServiceReview] ADD CONSTRAINT [FK_tbl_VendorServiceReview_tb_User] FOREIGN KEY ([EventBookingId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_VendorServiceReview] ADD CONSTRAINT [FK_tbl_VendorServiceReview_tb_User] FOREIGN KEY ([EventBookingId]) REFERENCES [dbo].[tbl_User] ([UserId])
--GO

--ALTER TABLE [dbo].[tbl_WalletTransaction] ADD CONSTRAINT [FK_tbl_WalletTransaction_tb_ClientWallet] FOREIGN KEY ([ClientWalletId]) REFERENCES [dbo].[tbl_ClientWallet] ([ClientWalletEntryId])
--GO

--ALTER TABLE [dbo].[tbl_WalletTransaction] ADD CONSTRAINT [FK_tbl_WalletTransaction_tb_UserWishList] FOREIGN KEY ([UserWishListId]) REFERENCES [dbo].[tbl_UserWishList] ([UserWishListId])
--GO

--ALTER TABLE [dbo].[tbl_WalletTransaction] ADD CONSTRAINT [FK_tbl_WalletTransaction_tb_TransactionType] FOREIGN KEY ([UserWishListId]) REFERENCES [dbo].[tbl_TransactionType] ([TransactionTypeId])
--GO


-- Command to Drop the Constraint
-- ALTER TABLE tbl_VendorService DROP CONSTRAINT FK_tbl_VendorService_tb_Vendor;