
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  basePrice: number;
  icon: string;
}

export interface BookingData {
  name: string;
  phone: string;
  serviceId: string;
  pickupDate: string;
  deliveryOption: 'standard' | 'express';
}
