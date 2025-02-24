const arr = [
  {
    'Question Text': 'Which devices are supported by Southbridge chip?',
    'Question Type': 'Checkbox',
    'Option 1': 'Hard drives',
    'Option 2': 'Expansion slots',
    'Option 3': 'Video card',
    'Option 4': 'RAM',
    'Correct Answer': '1, 2',
  },
  {
    'Question Text': 'Which of the given memory is used as cache memory?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'DRAM',
    'Option 2': 'SRAM',
    'Option 3': 'DDR SDRAM',
    'Option 4': 'SDRAM',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Augmented Reality uses computer technology to create a simulated, three-dimensional environment',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which connector is used to connect storage devices to the motherboard?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'SATA',
    'Option 2': 'IDE',
    'Option 3': 'VGA',
    'Option 4': 'Ps/2',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Exchanging AC adapters with a different type of laptop or device may cause damage to both the AC adapter and the laptop.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'Common types of magnetic media storage drives are',
    'Question Type': 'Checkbox',
    'Option 1': 'Digital Versatile Disc',
    'Option 2': 'Solid-state drives',
    'Option 3': 'Tape Drive',
    'Option 4': 'Hard Disk Drive',
    'Correct Answer': '4, 3',
  },
  {
    'Question Text':
      'Random Access Memory (RAM) is the temporary working storage for data and programs that are being accessed by the CPU. RAM is not a volatile memory.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'The central processing unit (CPU) is responsible for interpreting and executing commands',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'BIOS controls the communication between the operating system and the user',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'What of the given in measured in Ohms (O)?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Current',
    'Option 2': 'Power',
    'Option 3': 'Voltage',
    'Option 4': 'Resistance',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'A chip designed to secure hardware by storing encryption keys, digital certificates, passwords, and data is called...',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Secure mode',
    'Option 2': 'LoJack',
    'Option 3': 'Trusted Platform Module',
    'Option 4': 'Drive encryption',
    'Option 5': 'e.\nSecure boot',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      'A technique used when the processor runs at less than the rated speed is called...',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Threading',
    'Option 2': 'Overclocking',
    'Option 3': 'Emulation',
    'Option 4': 'Throttling',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'The power of a CPU is measured by the speed and the amount of data that it can process',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'How is a power supply commonly attached to a tower case?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'screws',
    'Option 2': 'retention bar',
    'Option 3': 'standoffs',
    'Option 4': 'restraining strap',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'A student is looking to add memory in order to speed up a tower computer. Which type of memory module should the student be looking for?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'SIMM',
    'Option 2': 'SODIMM',
    'Option 3': 'DIP',
    'Option 4': 'DIMM',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Which RAID type provides basic error checking and fault tolerance by storing checksums separately from data?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Striping',
    'Option 2': 'Parity',
    'Option 3': 'Mirroring',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Measurement of how white and how black a monitor can get is called',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Brightness',
    'Option 2': 'Contrast ratio',
    'Option 3': 'Pixel',
    'Option 4': 'Dot pitch',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'A combination of compressed air, a high-air-flow ESD vacuum cleaner, and a small lint-free cloth is recommended to remove dust from the inside of a computer',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'What should a technician document during the troubleshooting process?',
    'Question Type': 'Checkbox',
    'Option 1': 'Customer opinions on the repair process',
    'Option 2': 'Time spent to resolve the problem',
    'Option 3': 'Predicted future issues and potential solutions',
    'Option 4': 'Replacement parts',
    'Correct Answer': '4, 2',
  },
  {
    'Question Text':
      'Which two types of signal interference are reduced more by STP than by UTP?',
    'Question Type': 'Checkbox',
    'Option 1': 'white noise',
    'Option 2': 'EMI',
    'Option 3': 'RFI',
    'Option 4': 'MDF',
    'Option 5': 'e.\n\ndispersion',
    'Correct Answer': '3, 2',
  },
  {
    'Question Text':
      'Which wireless protocol supports up to 7 devices in a PAN and operates in the 2.4 GHz range?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'NFC',
    'Option 2': 'Zigbee',
    'Option 3': 'Bluetooth',
    'Option 4': 'Wi-Fi',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      'Which type of internet connection uses phone lines but keeps them available for voice calls?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Dial-up',
    'Option 2': 'ISDN',
    'Option 3': 'Fiber',
    'Option 4': 'DSL',
    'Correct Answer': '4',
  },
  {
    'Question Text': 'What does a DNS server do?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Translates domain names into IP addresses',
    'Option 2': 'Assigns IP addresses to devices',
    'Option 3': 'Manages access to file servers',
    'Option 4': 'Provides centralized print job administration',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'Which protocol is used to send emails?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'IMAP',
    'Option 2': 'SMTP',
    'Option 3': 'FTP',
    'Option 4': 'POP',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Regular preventive maintenance can help reduce the likelihood of hardware failure',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'What type of cabling is immune to electromagnetic interference (EMI) and radio frequency interference (RFI)?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Fiber-optic',
    'Option 2': 'UTP',
    'Option 3': 'STP',
    'Option 4': 'Coaxial',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'What is a common cause of storage device problems?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Incorrect power supply wattage',
    'Option 2': 'Loose or incorrect cable connections',
    'Option 3': 'Faulty cooling fans',
    'Option 4': 'Excessive RAM usage',
    'Correct Answer': '2',
  },
  {
    'Question Text': '‘What is the purpose of MAC address filtering?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'It encrypts data packets',
    'Option 2': 'It assigns IP addresses dynamically',
    'Option 3': 'It restricts access to a network based on MAC addresses',
    'Option 4': 'It increases network bandwidth',
    'Correct Answer': '3',
  },
  {
    'Question Text': 'DHCP allows automatic IP address allocation],',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which protocol can be used to transfer messages from an email\nserver to an email client?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'SNMP',
    'Option 2': 'HTTP',
    'Option 3': 'SMTP',
    'Option 4': 'POP3',
    'Correct Answer': '4',
  },
  {
    'Question Text': '‘What is the purpose of a digitizer in a mobile device?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'to convert digital music to analog for headphone delivery',
    'Option 2': 'to convert user touch actions to digital input signals',
    'Option 3': 'to convert AC to DC',
    'Option 4': 'to convert analog video signals to digital ones',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      '‘Which protocol is primarily responsible for assigning dynamic\nIP addresses?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'DHCP',
    'Option 2': 'DNS',
    'Option 3': 'NAT',
    'Option 4': 'ARP',
    'Correct Answer': '1',
  },
  {
    'Question Text': '‘What is the purpose of a subnet mask?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'To assign IP addresses automatically',
    'Option 2': 'To determine the boundary between network and host',
    'Option 3': 'To translate domain names to IP addresses',
    'Option 4': 'To encrypt network traffic',
    'Correct Answer': '2',
  },
  {
    'Question Text': '‘What is an IPv6 address primarily composed of?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Octal numbers',
    'Option 2': 'Hexadecimal numbers',
    'Option 3': 'Decimal numbers',
    'Option 4': 'Binary numbers',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which of the following protocols is used to test connectivity\nbetween networked devices?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'TCP',
    'Option 2': 'ICMP',
    'Option 3': 'UDP',
    'Option 4': 'ARP',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'What is the function of NAT in networking?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Assigns dynamic IP addresses',
    'Option 2': 'Translates private IP addresses to public ones',
    'Option 3': 'Provides redundancy in a network',
    'Option 4': 'Encrypts network traffic',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'If your Windows computer cannot communicate with a DHCP server to\nobtain an IPv4 address, then Windows automatically assigns an APIPA\naddress',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which internet connection type uses phone lines and requires a filter?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Fiber',
    'Option 2': 'Satellite',
    'Option 3': 'Cable',
    'Option 4': 'DSL',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Which CPU architecture uses a small set of instructions for faster processing?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Virtualization Architecture',
    'Option 2': 'Reduced Instruction Set Computing',
    'Option 3': 'Multithreading Architecture',
    'Option 4': 'Complex Instruction Set Computing',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'What does the acronym "BIOS" stand for?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Base Input Operating Software',
    'Option 2': 'Basic Input Output System',
    'Option 3': 'Binary Internal Output System',
    'Option 4': 'Built-In Operating System',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'Which unit measures electrical current?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Volts',
    'Option 2': 'Watts',
    'Option 3': 'Ohms',
    'Option 4': 'Amperes',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'What is the most common slot type used for graphics cards?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'PCIe x16',
    'Option 2': 'SATA',
    'Option 3': 'PCIe x1',
    'Option 4': 'PCI',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'What does a firewall use to decide whether to permit or deny data?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Tester',
    'Option 2': 'IP addressing',
    'Option 3': 'DNS rules',
    'Option 4': 'Access Control Lists',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Secure Boot is a UEFI feature that prevents unauthorized operating systems from booting',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'What tool is used to attach an RJ-45 connector to a network cable?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Wire strippers',
    'Option 2': 'Punch down tool',
    'Option 3': 'Multimeter',
    'Option 4': 'Crimper',
    'Correct Answer': '4',
  },
  {
    'Question Text': 'What data is stored in the CMOS memory chip?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'device drivers',
    'Option 2': 'user login information',
    'Option 3': 'BIOS settings',
    'Correct Answer': '3',
  },
  {
    'Question Text': 'What does a Zigbee Coordinator do?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Manages client devices in a wireless mesh network',
    'Option 2': 'Converts analog signals to digital',
    'Option 3': 'Acts as a wireless access point',
    'Option 4': 'Encrypts data for secure transmission',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'What is the purpose of RAID mirroring?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Provide data redundancy',
    'Option 2': 'Enable faster data transfers',
    'Option 3': 'Distribute data across multiple drives for speed',
    'Option 4': 'Save storage space by compressing data',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which network device regenerates signals to extend their range?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Patch panel',
    'Option 2': 'Repeater',
    'Option 3': 'Bridge',
    'Option 4': 'Switch',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'What type of memory is used to store the most recently accessed data by the CPU?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Cache',
    'Option 2': 'SSD',
    'Option 3': 'ROM',
    'Option 4': 'RAM',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which RAID level combines striping and parity for in combination to provide speed and to create large volumes?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'RAID 0',
    'Option 2': 'RAID 5',
    'Option 3': 'RAID 1',
    'Option 4': 'RAID 10',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Adapter physically connects one technology to another and also translates the signals from one technology to the other',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which type of motherboard expansion slot sends data one bit at a time over a serial bus?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'PCIe',
    'Option 2': 'RAM',
    'Option 3': 'PATA',
    'Option 4': 'PCI',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which transport layer protocol ensures reliable data delivery?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'HTTP',
    'Option 2': 'TCP',
    'Option 3': 'UDP',
    'Option 4': 'FTP',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'What is the purpose of a Trusted Platform Module (TPM)?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Improve graphical processing',
    'Option 2': 'Boost system performance',
    'Option 3': 'Overclock the CPU',
    'Option 4': 'Store encryption keys securely',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Shielded twisted-pair (STP) cables offer better protection against EMI than unshielded twisted-pair (UTP) cables',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Preventive maintenance can reduce the risk of unexpected hardware failures.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'What is the primary use of repair journals in troubleshooting?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Documenting solutions for future reference',
    'Option 2': 'Generating system performance reports',
    'Option 3': 'Accessing online troubleshooting tools',
    'Option 4': 'Finding manufacturer contact information',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which of the given is an example of optical storage device?',
    'Question Type': 'Checkbox',
    'Option 1': 'Solid-state drives',
    'Option 2': 'Digital Versatile Disc',
    'Option 3': 'Compact Disc',
    'Option 4': 'Tape Drive',
    'Option 5': 'e.\n\nHard Disk Drive',
    'Correct Answer': '2, 3',
  },
  {
    'Question Text':
      'What should you do before troubleshooting a computer issue?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Restart the computer',
    'Option 2': 'Install new drivers',
    'Option 3': 'Replace the power supply',
    'Option 4': 'Protect data on the system',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Which step in the troubleshooting process involves implementing a solution?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Identify the problem',
    'Option 2': 'Establish a plan of action',
    'Option 3': 'Verify functionality',
    'Option 4': 'Document findings',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which type of memory is volatile and works as temporary working storage for data and programs that are being accessed by the CPU?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'RAM',
    'Option 2': 'ROM',
    'Option 3': 'SSD',
    'Option 4': 'HDD',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which wireless technology supports up to 65,000 devices and operates at up to 250 kb/s?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Bluetooth',
    'Option 2': 'Zigbee',
    'Option 3': 'RFID',
    'Option 4': 'Z-Wave',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Multicore processors generate more heat than multiple single-core processors',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which CPU feature allows multiple operating systems to run simultaneously on a single processor?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Overclocking',
    'Option 2': 'HyperTransport',
    'Option 3': 'Multithreading',
    'Option 4': 'Virtualization',
    'Correct Answer': '4',
  },
  {
    'Question Text': 'What is the purpose of buffered memory?',
    'Question Type': 'Checkbox',
    'Option 1': 'It is faster than unbuffered memory',
    'Option 2': 'Improve power efficiency',
    'Option 3': 'Specialized memory for servers',
    'Option 4': 'Manage large amounts of RAM',
    'Option 5': 'e.\n\nIncrease CPU speed',
    'Correct Answer': '4, 3',
  },
  {
    'Question Text':
      'A proxy server hides the real internal host by acting on behalf of the client',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which command-line tool is used to migrate user data during a Windows upgrade?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'xcopy',
    'Option 2': 'USMT',
    'Option 3': 'Windows Easy Transfer',
    'Option 4': 'robocopy',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which boot file s responsible for managing the startup process in Windows?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'boot.ini',
    'Option 2': 'bootmgr.exe',
    'Option 3': 'winload.exe',
    'Option 4': 'ntldr',
    'Correct Answer': '2',
  },
  {
    'Question Text': 'MBR supports more partitions than GPT',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      '‘Which file system is used to access files over a network?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'NTFS',
    'Option 2': 'FAT',
    'Option 3': 'NFS',
    'Option 4': 'CDFS',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      'Which of the following best describes Infrastructure as a Service?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'A system designed only for client-side virtualization',
    'Option 2': 'A cloud model that provides only software solutions',
    'Option 3': 'A free service provided by all cloud vendors',
    'Option 4': 'A cloud model that offers hardware and network infrastructure',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Which type of hypervisor runs directly on the hardware without requiring an operating system?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Type 1',
    'Option 2': 'Hosted',
    'Option 3': 'Type 2',
    'Option 4': 'Client-side',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'What does Saa$ stand for?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Security as a Service',
    'Option 2': 'Software as a Service',
    'Option 3': 'Storage as a Service',
    'Option 4': 'System as a Service',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which of the following best describes the role of a hypervisor in virtualization?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'It is a cloud storage provider',
    'Option 2': 'It manages hardware allocation for virtual machines',
    'Option 3': 'It connects virtual machines to the internet',
    'Option 4': 'It acts as an operating system for a virtual machine',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Server sprawl occurs when a dedicated server fails or goes offline. There are no backup servers\nto handle the failure.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which of the following is the correct sequence of steps in the laser printing process?',
    'Question Type': 'Multiple Choice',
    'Option 1':
      'Charging → Developing → Exposing → Transferring → Fusing → Cleaning',
    'Option 2':
      'Processing → Charging → Exposing → Developing → Transferring → Fusing → Cleaning',
    'Option 3':
      'Charging → Exposing → Developing → Transferring → Fusing → Cleaning',
    'Option 4':
      'Exposing → Charging → Transferring → Developing → Fusing → Cleaning',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which of the following measures the resolution of a printed image?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'CMY',
    'Option 2': 'TCO',
    'Option 3': 'DPI',
    'Option 4': 'PPM',
    'Correct Answer': '3',
  },
  {
    'Question Text': 'Impact printers can print carbon copies',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text': 'What type of memory module is commonly used in laptops?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'SODIMM',
    'Option 2': 'DIMM',
    'Option 3': 'SIMM',
    'Option 4': 'RIMM',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      '‘Which wireless communication standard is defined under IEEE 802.15',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Wi-Fi',
    'Option 2': 'Bluetooth',
    'Option 3': 'Infrared',
    'Option 4': 'NFC',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Near field communication enables mobile devices to establish radio communications with other\ndevices by placing the devices close together or by touching them together',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'A technician is configuring a device and the device shows that it is pairing. Which mobile\ntechnology is being used?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Wi-Fi',
    'Option 2': 'Zigbee',
    'Option 3': 'Tethering',
    'Option 4': 'Bluetooth',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'Which laptop component makes use of throttling to reduce power consumption and heat?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'optical drive',
    'Option 2': 'hard drive',
    'Option 3': 'CPU',
    'Option 4': 'motherboard',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      '‘Which command is used to test connectivity between two devices?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'arp -a',
    'Option 2': 'conn',
    'Option 3': 'nslookup',
    'Option 4': 'ping',
    'Correct Answer': '4',
  },
  {
    'Question Text': 'DHCP assigns static IP addresses to devices.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      '‘What command can be used to troubleshoot domain name resolution issues?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'arp -a',
    'Option 2': 'nslookup',
    'Option 3': 'get',
    'Option 4': 'tracert',
    'Correct Answer': '2',
  },
  {
    'Question Text': '‘What is the best description of NetBIOS?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'NetBIOS replaced NetBT on Windows networks',
    'Option 2': 'It is an obsolete and insecure Windows network protocol',
    'Option 3':
      'It is required for file sharing when using operating systems after Windows 2000',
    'Option 4': 'It is an alternative to TCP/IP on Windows networks',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      '‘Which partition type allows an operating system to boot on an MBR disk?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Active Partition',
    'Option 2': 'Logical Partition',
    'Option 3': 'GPT Partition',
    'Option 4': 'Extended Partition',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which installation type completely wipes the drive before installing Windows?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Safe Mode Install',
    'Option 2': 'Clean Install',
    'Option 3': 'Upgrade',
    'Option 4': 'In-Place Install',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'What technology allows users to access data anywhere and at any time?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'virtualization',
    'Option 2': 'cloud computing',
    'Option 3': 'micromarketing',
    'Option 4': 'data analytics',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'While working in a computer training room, the technician notices that one computer emits a\nloud clicking noise. Which device should the technician check first?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'internal speaker',
    'Option 2': 'hard drive',
    'Option 3': 'sound card',
    'Option 4': 'RAM',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which printing process is used in cash register receipt printers?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Inkjet',
    'Option 2': 'Thermal',
    'Option 3': 'Impact',
    'Option 4': 'Laser',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Which network component s responsible for filtering and forwarding packets within the same\nnetwork?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Firewall',
    'Option 2': 'Modem',
    'Option 3': 'Router',
    'Option 4': 'Switch',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'A network technician is checking a computer to see if the DHCP client is working correctly. The\ntechnician issues the ipconfig /all command. Which two parameters should the technician\nreview? (Choose two.)',
    'Question Type': 'Checkbox',
    'Option 1': 'default gateway',
    'Option 2': 'subnet mask',
    'Option 3': 'media state',
    'Option 4': 'host name',
    'Option 5': 'e.\n\ndescription',
    'Correct Answer': '2, 1',
  },
  {
    'Question Text': 'How many bits are used to represent a MAC address?',
    'Question Type': 'Multiple Choice',
    'Option 1': '48',
    'Option 2': '132',
    'Option 3': '128',
    'Option 4': '8',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which type of printer uses powdered ink instead of liquid ink?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Laser',
    'Option 2': 'Inkjet',
    'Option 3': 'Thermal',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'What step comes after testing the theory to determine the cause of a printer issue?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Document findings and solutions',
    'Option 2': 'Verify full system functionality',
    'Option 3': 'Clean the printer components',
    'Option 5': 'Establish a plan of action to resolve the issue',
    'Correct Answer': '4',
  },
  {
    'Question Text':
      'In laser printing, what is the name of the process of applying toner to the latent image on the drum?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'charging',
    'Option 2': 'fusing',
    'Option 3': 'developing',
    'Option 5': 'transferring',
    'Correct Answer': '3',
  },
  {
    'Question Text': 'Thermal printers use ink cartridges for printing',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Laser printers use a seven-step process to produce images.',
    'Question Type': 'Multiple Choice',
    'Option 1': 'True',
    'Option 2': 'False',
    'Correct Answer': '1',
  },
  {
    'Question Text':
      'Which type of printer uses a laser to create an image on a drum?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Impact',
    'Option 2': 'Inkjet',
    'Option 3': 'Laser',
    'Option 5': 'Thermal',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      'What mechanism is used in a laser printer to permanently fuse the toner to the paper?',
    'Question Type': 'Checkbox',
    'Option 1': 'electrical charge',
    'Option 2': 'light',
    'Option 3': 'heat',
    'Option 5': 'pressure',
    'Correct Answer': '3, 4',
  },
  {
    'Question Text': 'What does dots per inch (dpi) measure in printers?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Paper thickness',
    'Option 2': 'Printer speed',
    'Option 3': 'Print quality',
    'Option 5': 'Ink usage',
    'Correct Answer': '3',
  },
  {
    'Question Text':
      'Which component in an impact printer strikes an inked ribbon to create an image?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Duplexer',
    'Option 2': 'Print head',
    'Option 3': 'Heating element',
    'Option 5': 'Feeder roller',
    'Correct Answer': '2',
  },
  {
    'Question Text':
      'Did you prepare for your exam reading your lectures? (free point) ЕСЛИ ПОПАЛСЯ ЭТОТ ВОПРОС, ТО ТЫ ПО ЖИЗНИ КРАСАВЧИК ВАЩЕ',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Skip',
    'Option 2': 'I trust in GPT',
    'Option 3': 'I was born ready',
    'Option 5': 'As always',
    'Correct Answer': '4, 3, 2, 1',
  },
  {
    'Question Text':
      'Which type of printer uses filaments to create three-dimensional objects?',
    'Question Type': 'Multiple Choice',
    'Option 1': 'Thermal printer',
    'Option 2': 'Laser printer',
    'Option 3': 'Inkjet printer',
    'Option 4': '3D printer',
    'Correct Answer': '4',
  },
];

export const questionsMoodle = JSON.parse(
  JSON.stringify(arr).replace(/\s(?=\w+":)/g, ''),
);
