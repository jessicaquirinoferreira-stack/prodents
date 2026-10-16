import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { SpecialistsSection } from './components/SpecialistsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [modalTreatment, setModalTreatment] = useState<string | undefined>(undefined);
  const [modalSpecialist, setModalSpecialist] = useState<string | undefined>(undefined);

  const handleOpenGeneralBooking = () => {
    setModalTreatment(undefined);
    setModalSpecialist(undefined);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectTreatmentForBooking = (treatmentTitle: string) => {
    setModalTreatment(treatmentTitle);
    setModalSpecialist(undefined);
    setIsAppointmentModalOpen(true);
  };

  const handleSelectSpecialistForBooking = (doctorName: string) => {
    setModalSpecialist(doctorName);
    setModalTreatment(undefined);
    setIsAppointmentModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0F0C0A] text-[#F5F0EB] flex flex-col selection:bg-[#C9A86C]/30 selection:text-white">
      {/* Sticky Header with Centered Logo */}
      <Header onOpenBooking={handleOpenGeneralBooking} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenGeneralBooking} />

        {/* Sobre a Clínica */}
        <AboutSection />

        {/* Tratamentos & Especialidades */}
        <TreatmentsSection
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        {/* Conheça Nossa Equipe */}
        <SpecialistsSection
          onSelectSpecialistForBooking={handleSelectSpecialistForBooking}
        />

        {/* Depoimentos de Pacientes */}
        <TestimonialsSection />

        {/* Seção de Agendamento */}
        <BookingSection
          preselectedTreatment={modalTreatment}
          preselectedSpecialist={modalSpecialist}
        />

        {/* Onde Estamos & Contato */}
        <ContactSection />
      </main>

      {/* Footer Completo */}
      <Footer />

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloat />

      {/* Modal de Agendamento Rápido */}
      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
        initialTreatment={modalTreatment}
        initialSpecialist={modalSpecialist}
      />
    </div>
  );
}
