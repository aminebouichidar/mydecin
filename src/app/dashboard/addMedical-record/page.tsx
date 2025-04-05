'use client';
import { useState } from 'react';
import PageContainer from '@/components/layout/page-container';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {} from //   Form,
//   FormControl,
//   FormDescription,
//   FormItem,
//   FormLabel,
//   FormMessage
'@/components/ui/form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import {
  IconUser,
  IconCalendar,
  IconHeartRateMonitor,
  IconStethoscope,
  IconVaccine,
  IconPhoneCall,
  IconHome,
  IconMail,
  IconCar,
  IconAlertCircle,
  IconActivity,
  IconHeartbeat,
  IconPill,
  IconNotes,
  IconUpload,
  IconUsersGroup
} from '@tabler/icons-react';

const FormLabel = ({ children, ...props }) => (
  <label className='text-sm font-medium text-gray-700' {...props}>
    {children}
  </label>
);

export default function CreateMedicalRecordPage() {
  const [activeTab, setActiveTab] = useState('information');
  const [isLoading, setIsLoading] = useState(false);

  // Mock form state
  const [formData, setFormData] = useState({
    // Informations personnelles
    firstName: '',
    lastName: '',
    birthdate: '',
    gender: '',
    idNumber: '',
    address: '',
    postalCode: '',
    city: '',
    email: '',
    phone: '',
    emergencyContact: '',
    emergencyPhone: '',
    bloodType: '',
    insuranceProvider: '',
    insuranceNumber: '',

    // Antécédents médicaux
    allergies: '',
    chronicConditions: '',
    pastSurgeries: '',
    familyHistory: '',

    // Médication et traitement actuel
    currentMedications: '',
    prescribedBy: '',
    treatment: '',

    // Mode de vie
    smoker: false,
    alcoholConsumption: '',
    physicalActivity: '',
    diet: '',

    // Consentements
    consentTreatment: false,
    consentDataSharing: false,
    consentEmergencyContact: false
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simuler un appel API
    setTimeout(() => {
      setIsLoading(false);
      alert('Dossier médical créé avec succès!');
      // En production, vous redirigeriez vers la liste des dossiers médicaux
    }, 1500);
  };

  const goToNextTab = () => {
    if (activeTab === 'information') setActiveTab('antecedents');
    else if (activeTab === 'antecedents') setActiveTab('medication');
    else if (activeTab === 'medication') setActiveTab('lifestyle');
    else if (activeTab === 'lifestyle') setActiveTab('consent');
  };

  const goToPreviousTab = () => {
    if (activeTab === 'consent') setActiveTab('lifestyle');
    else if (activeTab === 'lifestyle') setActiveTab('medication');
    else if (activeTab === 'medication') setActiveTab('antecedents');
    else if (activeTab === 'antecedents') setActiveTab('information');
  };

  return (
    <PageContainer>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-bold tracking-tight'>
            Création d'un nouveau dossier médical
          </h2>
          <div className='flex items-center gap-2'>
            <Badge
              variant='outline'
              className='border-blue-300 bg-blue-100 text-blue-800'
            >
              Nouveau dossier
            </Badge>
          </div>
        </div>

        <Card>
          <CardContent className='p-6'>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className='mb-6 grid grid-cols-5'>
                <TabsTrigger
                  value='information'
                  className='flex items-center gap-2'
                >
                  <IconUser size={16} />
                  <span className='hidden sm:inline'>Informations</span>
                </TabsTrigger>
                <TabsTrigger
                  value='antecedents'
                  className='flex items-center gap-2'
                >
                  <IconHeartRateMonitor size={16} />
                  <span className='hidden sm:inline'>Antécédents</span>
                </TabsTrigger>
                <TabsTrigger
                  value='medication'
                  className='flex items-center gap-2'
                >
                  <IconPill size={16} />
                  <span className='hidden sm:inline'>Médication</span>
                </TabsTrigger>
                <TabsTrigger
                  value='lifestyle'
                  className='flex items-center gap-2'
                >
                  <IconActivity size={16} />
                  <span className='hidden sm:inline'>Mode de vie</span>
                </TabsTrigger>
                <TabsTrigger
                  value='consent'
                  className='flex items-center gap-2'
                >
                  <IconCar size={16} />
                  <span className='hidden sm:inline'>Consentements</span>
                </TabsTrigger>
              </TabsList>

              <form onSubmit={handleSubmit}>
                {/* Tab 1: Informations personnelles */}
                <TabsContent value='information'>
                  <div className='space-y-6'>
                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='lastName'>Nom</FormLabel>
                        <Input
                          id='lastName'
                          placeholder='Nom de famille'
                          value={formData.lastName}
                          onChange={(e) =>
                            handleChange('lastName', e.target.value)
                          }
                          required
                        />
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='firstName'>Prénom</FormLabel>
                        <Input
                          id='firstName'
                          placeholder='Prénom'
                          value={formData.firstName}
                          onChange={(e) =>
                            handleChange('firstName', e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='birthdate'>
                          Date de naissance
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconCalendar className='text-muted-foreground h-4 w-4' />
                          <Input
                            id='birthdate'
                            type='date'
                            value={formData.birthdate}
                            onChange={(e) =>
                              handleChange('birthdate', e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='gender'>Genre</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            handleChange('gender', value)
                          }
                          value={formData.gender}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Sélectionner' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='M'>Masculin</SelectItem>
                            <SelectItem value='F'>Féminin</SelectItem>
                            <SelectItem value='O'>Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className='grid gap-2'>
                      <FormLabel htmlFor='idNumber'>
                        Numéro de sécurité sociale
                      </FormLabel>
                      <div className='flex items-center gap-2'>
                        <IconCar className='text-muted-foreground h-4 w-4' />
                        <Input
                          id='idNumber'
                          placeholder='Numéro de sécurité sociale'
                          value={formData.idNumber}
                          onChange={(e) =>
                            handleChange('idNumber', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='grid gap-2'>
                      <FormLabel htmlFor='address'>Adresse</FormLabel>
                      <div className='flex items-center gap-2'>
                        <IconHome className='text-muted-foreground h-4 w-4' />
                        <Input
                          id='address'
                          placeholder='Adresse complète'
                          value={formData.address}
                          onChange={(e) =>
                            handleChange('address', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='postalCode'>Code postal</FormLabel>
                        <Input
                          id='postalCode'
                          placeholder='Code postal'
                          value={formData.postalCode}
                          onChange={(e) =>
                            handleChange('postalCode', e.target.value)
                          }
                        />
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='city'>Ville</FormLabel>
                        <Input
                          id='city'
                          placeholder='Ville'
                          value={formData.city}
                          onChange={(e) => handleChange('city', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconMail className='text-muted-foreground h-4 w-4' />
                          <Input
                            id='email'
                            type='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={(e) =>
                              handleChange('email', e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='phone'>Téléphone</FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconPhoneCall className='text-muted-foreground h-4 w-4' />
                          <Input
                            id='phone'
                            placeholder='Numéro de téléphone'
                            value={formData.phone}
                            onChange={(e) =>
                              handleChange('phone', e.target.value)
                            }
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='emergencyContact'>
                          Contact d'urgence
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconUsersGroup className='text-muted-foreground h-4 w-4' />
                          <Input
                            id='emergencyContact'
                            placeholder='Nom et prénom'
                            value={formData.emergencyContact}
                            onChange={(e) =>
                              handleChange('emergencyContact', e.target.value)
                            }
                          />
                        </div>
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='emergencyPhone'>
                          Téléphone d'urgence
                        </FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconPhoneCall className='text-muted-foreground h-4 w-4' />
                          <Input
                            id='emergencyPhone'
                            placeholder="Numéro de téléphone d'urgence"
                            value={formData.emergencyPhone}
                            onChange={(e) =>
                              handleChange('emergencyPhone', e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>

                    <div className='grid gap-6 sm:grid-cols-2'>
                      <div className='grid gap-2'>
                        <FormLabel htmlFor='bloodType'>
                          Groupe sanguin
                        </FormLabel>
                        <Select
                          onValueChange={(value) =>
                            handleChange('bloodType', value)
                          }
                          value={formData.bloodType}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder='Sélectionner' />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value='A+'>A+</SelectItem>
                            <SelectItem value='A-'>A-</SelectItem>
                            <SelectItem value='B+'>B+</SelectItem>
                            <SelectItem value='B-'>B-</SelectItem>
                            <SelectItem value='AB+'>AB+</SelectItem>
                            <SelectItem value='AB-'>AB-</SelectItem>
                            <SelectItem value='O+'>O+</SelectItem>
                            <SelectItem value='O-'>O-</SelectItem>
                            <SelectItem value='inconnu'>
                              Je ne sais pas
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className='grid gap-2'>
                        <FormLabel htmlFor='insuranceProvider'>
                          Mutuelle
                        </FormLabel>
                        <Input
                          id='insuranceProvider'
                          placeholder='Nom de la mutuelle'
                          value={formData.insuranceProvider}
                          onChange={(e) =>
                            handleChange('insuranceProvider', e.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className='grid gap-2'>
                      <FormLabel htmlFor='insuranceNumber'>
                        Numéro d'adhérent mutuelle
                      </FormLabel>
                      <Input
                        id='insuranceNumber'
                        placeholder="Numéro d'adhérent"
                        value={formData.insuranceNumber}
                        onChange={(e) =>
                          handleChange('insuranceNumber', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='mt-6 flex justify-end'>
                    <Button onClick={goToNextTab} type='button'>
                      Continuer
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 2: Antécédents médicaux */}
                <TabsContent value='antecedents'>
                  <div className='space-y-6'>
                    <div className='grid gap-4'>
                      <FormLabel htmlFor='allergies'>
                        <div className='flex items-center gap-2'>
                          <IconAlertCircle className='h-4 w-4 text-red-500' />
                          Allergies connues
                        </div>
                      </FormLabel>
                      <Textarea
                        id='allergies'
                        placeholder='Listez toutes les allergies connues: médicaments, aliments, etc.'
                        rows={3}
                        value={formData.allergies}
                        onChange={(e) =>
                          handleChange('allergies', e.target.value)
                        }
                      />
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='chronicConditions'>
                        <div className='flex items-center gap-2'>
                          <IconHeartbeat className='h-4 w-4 text-blue-500' />
                          Conditions chroniques
                        </div>
                      </FormLabel>
                      <Textarea
                        id='chronicConditions'
                        placeholder='Diabète, hypertension, asthme, etc.'
                        rows={3}
                        value={formData.chronicConditions}
                        onChange={(e) =>
                          handleChange('chronicConditions', e.target.value)
                        }
                      />
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='pastSurgeries'>
                        <div className='flex items-center gap-2'>
                          <IconStethoscope className='h-4 w-4 text-green-500' />
                          Interventions chirurgicales passées
                        </div>
                      </FormLabel>
                      <Textarea
                        id='pastSurgeries'
                        placeholder="Type d'intervention, date, complications éventuelles, etc."
                        rows={3}
                        value={formData.pastSurgeries}
                        onChange={(e) =>
                          handleChange('pastSurgeries', e.target.value)
                        }
                      />
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='familyHistory'>
                        <div className='flex items-center gap-2'>
                          <IconUsersGroup className='h-4 w-4 text-purple-500' />
                          Antécédents familiaux
                        </div>
                      </FormLabel>
                      <Textarea
                        id='familyHistory'
                        placeholder='Maladies héréditaires, conditions familiales connues, etc.'
                        rows={3}
                        value={formData.familyHistory}
                        onChange={(e) =>
                          handleChange('familyHistory', e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className='mt-6 flex justify-between'>
                    <Button
                      onClick={goToPreviousTab}
                      variant='outline'
                      type='button'
                    >
                      Retour
                    </Button>
                    <Button onClick={goToNextTab} type='button'>
                      Continuer
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 3: Médication et traitement */}
                <TabsContent value='medication'>
                  <div className='space-y-6'>
                    <div className='grid gap-4'>
                      <FormLabel htmlFor='currentMedications'>
                        <div className='flex items-center gap-2'>
                          <IconPill className='h-4 w-4 text-orange-500' />
                          Médicaments actuels
                        </div>
                      </FormLabel>
                      <Textarea
                        id='currentMedications'
                        placeholder='Nom, dosage et fréquence des médicaments actuellement pris'
                        rows={4}
                        value={formData.currentMedications}
                        onChange={(e) =>
                          handleChange('currentMedications', e.target.value)
                        }
                      />
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='prescribedBy'>
                        Prescrits par
                      </FormLabel>
                      <Input
                        id='prescribedBy'
                        placeholder='Nom du médecin prescripteur'
                        value={formData.prescribedBy}
                        onChange={(e) =>
                          handleChange('prescribedBy', e.target.value)
                        }
                      />
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='treatment'>
                        <div className='flex items-center gap-2'>
                          <IconNotes className='h-4 w-4 text-teal-500' />
                          Plan de traitement actuel
                        </div>
                      </FormLabel>
                      <Textarea
                        id='treatment'
                        placeholder='Description du traitement en cours'
                        rows={4}
                        value={formData.treatment}
                        onChange={(e) =>
                          handleChange('treatment', e.target.value)
                        }
                      />
                    </div>

                    <div className='rounded-md border bg-gray-50 p-4'>
                      <div className='mb-4 flex items-center gap-2'>
                        <IconUpload className='h-5 w-5 text-blue-500' />
                        <FormLabel className='m-0 font-medium text-blue-500'>
                          Documents médicaux
                        </FormLabel>
                      </div>
                      <p className='text-muted-foreground mb-4 text-sm'>
                        Ajoutez les ordonnances, analyses ou autres documents
                        médicaux pertinents
                      </p>
                      <Button variant='outline' type='button'>
                        Ajouter des documents
                      </Button>
                    </div>
                  </div>

                  <div className='mt-6 flex justify-between'>
                    <Button
                      onClick={goToPreviousTab}
                      variant='outline'
                      type='button'
                    >
                      Retour
                    </Button>
                    <Button onClick={goToNextTab} type='button'>
                      Continuer
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 4: Mode de vie */}
                <TabsContent value='lifestyle'>
                  <div className='space-y-6'>
                    <div className='grid gap-4'>
                      <FormLabel>
                        <div className='flex items-center gap-2'>
                          <IconActivity className='h-4 w-4 text-red-500' />
                          Statut tabagique
                        </div>
                      </FormLabel>
                      <div className='flex items-center gap-2'>
                        <Checkbox
                          id='smoker'
                          checked={formData.smoker}
                          onCheckedChange={(checked) =>
                            handleChange('smoker', checked)
                          }
                        />
                        <label htmlFor='smoker' className='text-sm font-medium'>
                          Fumeur
                        </label>
                      </div>
                    </div>

                    {/* statut alcoolic */}
                    <div className='grid gap-4'>
                      <FormLabel htmlFor='alcoholConsumption'>
                        <div className='flex items-center gap-2'>
                          <IconActivity className='h-4 w-4 text-red-500' />
                          Statut alcoolique
                        </div>
                      </FormLabel>
                      {/* checkbox with option and defaut to 'occasionelle' */}
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='alcoholConsumption'>
                        <div className='flex items-center gap-2'>
                          <IconActivity className='h-4 w-4 text-amber-500' />
                          Consommation d'alcool
                        </div>
                      </FormLabel>
                      <RadioGroup
                        id='alcoholConsumption'
                        value={formData.alcoholConsumption}
                        onValueChange={(value) =>
                          handleChange('alcoholConsumption', value)
                        }
                      >
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='none' id='none' />
                          <label htmlFor='none' className='text-sm font-medium'>
                            Aucune
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='occasional' id='occasional' />
                          <label
                            htmlFor='occasional'
                            className='text-sm font-medium'
                          >
                            Occasionnelle
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='moderate' id='moderate' />
                          <label
                            htmlFor='moderate'
                            className='text-sm font-medium'
                          >
                            Modérée
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='regular' id='regular' />
                          <label
                            htmlFor='regular'
                            className='text-sm font-medium'
                          >
                            Régulière
                          </label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='physicalActivity'>
                        <div className='flex items-center gap-2'>
                          <IconActivity className='h-4 w-4 text-green-500' />
                          Activité physique
                        </div>
                      </FormLabel>
                      <RadioGroup
                        id='physicalActivity'
                        value={formData.physicalActivity}
                        onValueChange={(value) =>
                          handleChange('physicalActivity', value)
                        }
                      >
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='sedentary' id='sedentary' />
                          <label
                            htmlFor='sedentary'
                            className='text-sm font-medium'
                          >
                            Sédentaire
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='light' id='light' />
                          <label
                            htmlFor='light'
                            className='text-sm font-medium'
                          >
                            Légère
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem
                            value='moderate'
                            id='moderate-activity'
                          />
                          <label
                            htmlFor='moderate-activity'
                            className='text-sm font-medium'
                          >
                            Modérée
                          </label>
                        </div>
                        <div className='flex items-center gap-2'>
                          <RadioGroupItem value='intense' id='intense' />
                          <label
                            htmlFor='intense'
                            className='text-sm font-medium'
                          >
                            Intense
                          </label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className='grid gap-4'>
                      <FormLabel htmlFor='diet'>
                        <div className='flex items-center gap-2'>
                          <IconActivity className='h-4 w-4 text-blue-500' />
                          Régime alimentaire
                        </div>
                      </FormLabel>
                      <Select
                        id='diet'
                        value={formData.diet}
                        onValueChange={(value) => handleChange('diet', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder='Sélectionner' />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value='standard'>Standard</SelectItem>
                          <SelectItem value='vegetarian'>Végétarien</SelectItem>
                          <SelectItem value='vegan'>Végétalien</SelectItem>
                          <SelectItem value='pescetarian'>
                            Pescétarien
                          </SelectItem>
                          <SelectItem value='gluten-free'>
                            Sans gluten
                          </SelectItem>
                          <SelectItem value='low-carb'>
                            Faible en glucides
                          </SelectItem>
                          <SelectItem value='other'>Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className='mt-6 flex justify-between'>
                    <Button
                      onClick={goToPreviousTab}
                      variant='outline'
                      type='button'
                    >
                      Retour
                    </Button>
                    <Button onClick={goToNextTab} type='button'>
                      Continuer
                    </Button>
                  </div>
                </TabsContent>

                {/* Tab 5: Consentements */}
                <TabsContent value='consent'>
                  <div className='space-y-6'>
                    <div className='rounded-md border bg-gray-50 p-4'>
                      <h3 className='mb-2 font-medium'>Consentements requis</h3>
                      <p className='text-muted-foreground mb-4 text-sm'>
                        Veuillez lire attentivement et cocher les cases pour
                        donner votre consentement
                      </p>

                      <div className='space-y-4'>
                        <div className='flex gap-2'>
                          <Checkbox
                            id='consent-treatment'
                            checked={formData.consentTreatment}
                            onCheckedChange={(checked) =>
                              handleChange('consentTreatment', checked)
                            }
                            required
                          />
                          <div>
                            <label
                              htmlFor='consent-treatment'
                              className='block text-sm font-medium'
                            >
                              Consentement aux soins
                            </label>
                            <p className='text-muted-foreground text-xs'>
                              Je consens à recevoir des soins médicaux et je
                              comprends que je peux retirer mon consentement à
                              tout moment.
                            </p>
                          </div>
                        </div>

                        <div className='flex gap-2'>
                          <Checkbox
                            id='consent-data'
                            checked={formData.consentDataSharing}
                            onCheckedChange={(checked) =>
                              handleChange('consentDataSharing', checked)
                            }
                            required
                          />
                          <div>
                            <label
                              htmlFor='consent-data'
                              className='block text-sm font-medium'
                            >
                              Traitement des données personnelles
                            </label>
                            <p className='text-muted-foreground text-xs'>
                              J'accepte que mes données médicales soient
                              traitées et conservées conformément à la politique
                              de confidentialité du cabinet.
                            </p>
                          </div>
                        </div>

                        <div className='flex gap-2'>
                          <Checkbox
                            id='consent-emergency'
                            checked={formData.consentEmergencyContact}
                            onCheckedChange={(checked) =>
                              handleChange('consentEmergencyContact', checked)
                            }
                          />
                          <div>
                            <label
                              htmlFor='consent-emergency'
                              className='block text-sm font-medium'
                            >
                              Contact en cas d'urgence
                            </label>
                            <p className='text-muted-foreground text-xs'>
                              J'autorise le cabinet médical à contacter la
                              personne désignée en cas d'urgence.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='rounded-md border p-4'>
                      <h3 className='mb-2 font-medium'>
                        Vérification des informations
                      </h3>
                      <p className='mb-4 text-sm'>
                        Je certifie que les informations fournies sont exactes
                        et je m'engage à signaler tout changement dans mon état
                        de santé.
                      </p>
                    </div>
                  </div>

                  <div className='mt-6 flex justify-between'>
                    <Button
                      onClick={goToPreviousTab}
                      variant='outline'
                      type='button'
                    >
                      Retour
                    </Button>
                    <Button type='submit' disabled={isLoading}>
                      {isLoading
                        ? 'Création en cours...'
                        : 'Créer le dossier médical'}
                    </Button>
                  </div>
                </TabsContent>
              </form>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className='text-lg'>Information importante</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='flex items-start gap-3'>
              <IconAlertCircle className='h-5 w-5 text-blue-500' />
              <p className='text-muted-foreground text-sm'>
                Veuillez vous assurer que toutes les informations fournies sont
                exactes et à jour. Si vous avez des questions, n'hésitez pas à
                contacter notre équipe.
                <br />
                Merci de votre confiance.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
