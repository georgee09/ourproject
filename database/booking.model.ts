import { Car } from "./car.model";

// Booking Status Types
export type BookingStatus = "pending" | "confirmed" | "active" | "completed" | "cancelled";

// Booking Payment Status
export type PaymentStatus = "unpaid" | "partial" | "paid" | "refunded";

// Main Booking Interface
export interface Booking {
  id: string;
  carId: string;
  car?: Car; // Optional car details (populated on fetch)
  userId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  startDate: Date | string;
  endDate: Date | string;
  pickupLocation: string;
  dropoffLocation: string;
  pickupTime?: string;
  dropoffTime?: string;
  totalDays: number;
  dailyRate: number;
  totalAmount: number;
  advanceAmount?: number;
  remainingAmount?: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  notes?: string;
  specialRequests?: string;
  insuranceSelected: boolean;
  insuranceAmount?: number;
  additionalFees?: {
    name: string;
    amount: number;
  }[];
  documents?: {
    drivingLicense?: string;
    idProof?: string;
  };
  cancellationReason?: string;
  cancelledAt?: Date | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// Type for creating a new booking (without id)
export type CreateBookingInput = Omit<
  Booking,
  "id" | "createdAt" | "updatedAt" | "cancelledAt"
>;

// Type for updating a booking (all fields optional except id)
export type UpdateBookingInput = Partial<Omit<Booking, "id">> & { id: string };

// Type for booking list response
export type BookingListResponse = Booking[];

// Type for booking statistics
export interface BookingStats {
  totalBookings: number;
  confirmedBookings: number;
  completedBookings: number;
  cancelledBookings: number;
  totalRevenue: number;
  pendingPayments: number;
}
