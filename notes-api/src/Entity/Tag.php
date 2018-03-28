<?php
/**
 * Created by PhpStorm.
 * User: Houziaux mike : jenaye
 * Email : mike@les-tilleuls.coop
 * Date: 24/03/18
 * Time: 14:21
 */
namespace Jenaye\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Note
 * @ApiResource(attributes={"normalization_context"={"groups"={"Tag"}}})
 * @ORM\Table(name="tag")
 * @ORM\Entity(repositoryClass="Jenaye\Repository\TagRepository")
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"Tag"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"Tag"})
     */
    public $created_at;

    /**
     * @ORM\Column(type="string", length=30)
     * @Groups({"Tag"})
     */
    public $name;

    /**
     * @ORM\ManyToMany(targetEntity="Note", mappedBy="tags")
     * @Groups({"Tag"})
     */
    private $notes;


    /**
     * Constructor
     */
    public function __construct()
    {
        $this->notes = new \Doctrine\Common\Collections\ArrayCollection();
    }
    /**
     * Add note
     *
     * @param \Jenaye\Entity\Note $note
     *
     * @return Activity
     */
    public function addTag(\Jenaye\Entity\Note $note)
    {
        $this->notes[] = $note;
        return $this;
    }
    /**
     * Remove note
     * @param \Jenaye\Entity\Note $note
     */
    public function removeTag(\Jenaye\Entity\Note $note)
    {
        $this->notes->removeElement($note);
    }

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->created_at;
    }

    /**
     * @param mixed $created_at
     */
    public function setCreatedAt($created_at)
    {
        $this->created_at = $created_at;
    }


}