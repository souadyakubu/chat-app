import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"chat-app-d780c","appId":"1:449689532740:web:2771a299d559a9ec393f11","storageBucket":"chat-app-d780c.firebasestorage.app","apiKey":"AIzaSyC-4uW0Dtz7qhPtQnfZNrjLwVeukBXI_DU","authDomain":"chat-app-d780c.firebaseapp.com","messagingSenderId":"449689532740","measurementId":"G-3TTGMY16XP"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
