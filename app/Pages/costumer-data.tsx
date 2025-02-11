import React from "react";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

const costumerdata = () => {
  return (
    <div>
      <Table>
        <TableCaption>A list of costumer data.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gmail</TableHead>
            <TableHead>Nationality</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">John Doe</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>47</TableCell>
            <TableCell className="">john.doe@gmail.com</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Jane Smith</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>34</TableCell>
            <TableCell className="">jane.smith@gmail.com</TableCell>
            <TableCell>Canada</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Michael Johnson</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>29</TableCell>
            <TableCell className="">michael.johnson@gmail.com</TableCell>
            <TableCell>UK</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Emily Davis</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>42</TableCell>
            <TableCell className="">emily.davis@gmail.com</TableCell>
            <TableCell>Australia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">David Brown</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>36</TableCell>
            <TableCell className="">david.brown@gmail.com</TableCell>
            <TableCell>New Zealand</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sarah Wilson</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>31</TableCell>
            <TableCell className="">sarah.wilson@gmail.com</TableCell>
            <TableCell>South Africa</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">James Taylor</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>28</TableCell>
            <TableCell className="">james.taylor@gmail.com</TableCell>
            <TableCell>USA</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Olivia Martinez</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>25</TableCell>
            <TableCell className="">olivia.martinez@gmail.com</TableCell>
            <TableCell>Spain</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Daniel Anderson</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>39</TableCell>
            <TableCell className="">daniel.anderson@gmail.com</TableCell>
            <TableCell>Germany</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sophia Thomas</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>33</TableCell>
            <TableCell className="">sophia.thomas@gmail.com</TableCell>
            <TableCell>France</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Matthew Lee</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>45</TableCell>
            <TableCell className="">matthew.lee@gmail.com</TableCell>
            <TableCell>China</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Isabella Harris</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>27</TableCell>
            <TableCell className="">isabella.harris@gmail.com</TableCell>
            <TableCell>Italy</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Joseph Clark</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>38</TableCell>
            <TableCell className="">joseph.clark@gmail.com</TableCell>
            <TableCell>Brazil</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mia Lewis</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>30</TableCell>
            <TableCell className="">mia.lewis@gmail.com</TableCell>
            <TableCell>Japan</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">William Walker</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>41</TableCell>
            <TableCell className="">william.walker@gmail.com</TableCell>
            <TableCell>Russia</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Ava Hall</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>26</TableCell>
            <TableCell className="">ava.hall@gmail.com</TableCell>
            <TableCell>India</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Alexander Young</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>32</TableCell>
            <TableCell className="">alexander.young@gmail.com</TableCell>
            <TableCell>South Korea</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Charlotte King</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>29</TableCell>
            <TableCell className="">charlotte.king@gmail.com</TableCell>
            <TableCell>Mexico</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Henry Wright</TableCell>
            <TableCell>Male</TableCell>
            <TableCell>37</TableCell>
            <TableCell className="">henry.wright@gmail.com</TableCell>
            <TableCell>Argentina</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Amelia Scott</TableCell>
            <TableCell>Female</TableCell>
            <TableCell>35</TableCell>
            <TableCell className="">amelia.scott@gmail.com</TableCell>
            <TableCell>Netherlands</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default costumerdata;
