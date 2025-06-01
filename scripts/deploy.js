async function main() {
    const [owner] = await ethers.getSigners();
    console.log("Deploying with owner:", owner.address);

    const EventBooking = await ethers.getContractFactory("EventBooking");
    const eventBooking = await EventBooking.deploy();
    await eventBooking.waitForDeployment();

    const contractAddress = await eventBooking.getAddress();
    console.log("Contract deployed to:", contractAddress);

    let tx = await eventBooking.createEvent("Conférence Blockchain", 5);
    await tx.wait();
    console.log("Conférence Blockchain created");

    tx = await eventBooking.createEvent("Atelier Solidity", 3);
    await tx.wait();
    console.log("Atelier Solidity created");
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error("Deployment error:", error);
        process.exit(1);
    });
